import styles from "@/src/styles/Valuation.module.css";
import Image from "next/image";
import houses from "@/public/houses.jpg";
import { CiBag1 } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";


const ValuationProjects = () => {
	return (
		<>
			<section className={styles.sectionOne}>
				<Image src={houses} alt="houses" fill objectFit="cover" />
			</section>
			<section className={styles.sectionTwo}>
				<h2>Our Purposes</h2>
				<hr />
				<p>Unlock the value of your assets with an expert estate valuation. </p>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.textBlurb}>
					<CiBag1 className={styles.icon} />
					<h4>Taxation</h4>
					<p>Certified valuation reports are essential to establishing hte value of an ownership interest for IRS tax purposes. </p>
				</div>
				<div className={styles.textBlurb}>
					<FaRegHandshake className={styles.icon} />
					<h4>Business Transactions</h4>
					<p>Often owners and company management need to know the true value of a business and the underlying ownership interests to carry out various business transactions,. </p>
				</div>
				<div className={styles.textBlurb}>
					<ImHammer2 className={styles.icon} />
					<h4>Litigation</h4>
					<p>Our consulting and valuation services provide you with results that will stand up in court, assist you in trial preparation.</p>
				</div>
			</section>
			<section className={styles.sectionFour}></section>
			<section className={styles.sectionFive}></section>
		</>
	);
};

export default ValuationProjects;
