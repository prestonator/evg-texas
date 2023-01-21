import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
	// Initialize our states
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	// Yup error message overrides
	const errMess = {
		req: "Error: Please fill this out",
		name: "Error: Name is required",
		email: "Error: Email is required",
		phone: "Error: Phone number is required",
		message: "Error: Message is required",
	};

	// Our Yup Schema for this form
	const ContactSchema = yup.object().shape({
		name: yup.string().label("Full Name").required(errMess.name).min(3).max(20),
		email: yup
			.string()
			.label("Email Address")
			.required(errMess.email)
			.email("Invalid Email Address"),
		phone: yup
			.string()
			.label("Phone Number")
			.required(errMess.phone)
			.min(8)
			.max(14),
		message: yup
			.string()
			.label("Message")
			.required(errMess.message)
			.min(10)
			.max(1000),
	});

	// Destruct useForm() and set our Yup schema as the validation resolver
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(ContactSchema),
	});

	// Send our valid form data to our back-end API
	const submitForm = async (data) => {
		setIsSubmitting(true);
		const id = toast.loading("Please wait...", {position: "bottom-center"})

		const res = await axios({
			method: "POST",
			url: "/api/contact-form",
			data: data,
		})
			.then((res) => {
				setIsSubmitting(false);
				toast.update(id, {render: "All is good", type: "success", isLoading: false, position: "bottom-center", autoClose: 5000});
				return res;
			})
			.catch((e) => {
				alert("An error occurred. See log for details.");
				toast.update(id, {render: "Something went wrong", type: "error", isLoading: false, position: "bottom-center" });
				console.error(e);
			});

		if (res.data.status === 1) {
			setIsSubmitted(true);
		} else {
			alert(res.data.message);
		}
	};


	

	return (
		<>
			<ToastContainer />
			{!isSubmitted ? (
				<form onSubmit={handleSubmit((data) => submitForm(data))}>
					<div>
						<input
							type="text"
							placeholder="John Doe"
							{...register("name", { required: true })}
						/>
						<p>{errors.name?.message}</p>
					</div>
					<div>
						<div>
							<input
								type="email"
								placeholder="john@example.com"
								{...register("email", { required: true })}
							/>
							<p>{errors.email?.message}</p>
						</div>
						<div>
							<input
								type="tel"
								placeholder="(555) 555-5555"
								{...register("phone", {
									required: true,
									min: 8,
									maxLength: 14,
								})}
							/>
							<p>{errors.phone?.message}</p>
						</div>
					</div>
					<div>
						<textarea
							placeholder="Please type your message..."
							{...register("message", { required: true })}
						/>
						<p>{errors.message?.message}</p>
					</div>
					<input
						type="submit"
						value={isSubmitting ? "Sending..." : "Send Message"}
						disabled={isSubmitting}
					/>
				</form>
			) : (
				<>
					<h1>Thank you!</h1>
					<p>
						Your message has been received. Please check your email for
						confirmation.
					</p>
				</>
			)}
		</>
	);
};

export default ContactForm;
