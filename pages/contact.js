import styles from "@/src/styles/Contact.module.css";
import ContactForm from "@/src/components/ContactForm";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsClock } from "react-icons/bs";

const Contact = () => {
	return (
		<>
			<section className={styles.sectionOne}>
				<iframe
					src="https://snazzymaps.com/embed/456489"
					style={{ border: "none" }}
					className={styles.map}
				/>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.sectionWrapper}>
					<div className={styles.colOne}>
						<h2>Free Consultations</h2>
						<ContactForm />
					</div>
					<div className={styles.colTwo}>
						<div className={styles.row}>
							<AiOutlineMail />
							<div className={styles.textContainer}>
								<span>Email</span>
								<p>Garland@evg-texas.com</p>
							</div>
						</div>
						<div className={styles.row}>
							<BsTelephone />
							<div className={styles.textContainer}>
								<span>Phone</span>
								<p>972-978-8388</p>
							</div>
						</div>
						<div className={styles.row}>
							<BsClock />
							<div className={styles.textContainer}>
								<span>Open Hours</span>
								<p>8am - 5pm (Mon-Fri)</p>
								<p>By Appointment (Sat)</p>
								<p>By Appointment (Sun)</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.col}>
					<h4>Free Consultation</h4>
					<h3>Set Up a Free Consultation Today!</h3>
					<hr />
					<p>
						Expert estate valuation services. Get a free consultation to see how
						to maximize property value.{" "}
					</p>
					<span>Contact Form</span>
				</div>
			</section>
		</>
	);
};

export default Contact;
