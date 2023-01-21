import React from "react";
import styles from "@/src/styles/About.module.css";
import Image from "next/image";
import logo from "@/public/evgLogo.jpg";
import taxPapers from "@/public/taxPapers.jpg";
import garlandHeadshot from "@/public/garlandTransparent.png";
import houses from "@/public/houses.jpg";

const About = () => {
	return (
		<>
			<section className={`${styles.section} ${styles.sectionOne}`}>
				<div className={styles.foreground}>
					<h1 className={styles.title}>About Us</h1>
				</div>
				<div className={styles.background}>
					<h1 className={styles.title}>About Us</h1>
				</div>
			</section>
			<section className={`${styles.section} ${styles.sectionTwo}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<Image src={taxPapers} fill alt="Tax Papers" />
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<hr />
				</div>
				<div className={`${styles.row} ${styles.rowThree}`}>
					<h3>Certified Valuation Analyst</h3>
				</div>
			</section>
			<section className={`${styles.section} ${styles.sectionThree}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<h3>Garland Fraser</h3>
				</div>
			</section>
			<section className={`${styles.section} ${styles.sectionFour}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<div className={styles.colOne}>
						<Image src={garlandHeadshot} fill alt="Garland Fraser Headshot" />
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<div className={styles.colOne}>
						<Image src={houses} fill alt="Houses" />
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.sectionFive}`}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<p>
						Garland Fraser is the founder and managing director of Estate
						Valuation Group and oversees all valuation projects.
					</p>
					<p>
						Mr. Fraser’s education includes a B.A. in Accounting from Eastern
						Central Oklahoma University. As a CPA for over 40 years, Mr. Fraser
						has extensive experience and has consulted individuals and
						professionals in the areas of entity planning, income tax planning,
						complex business transactions, estate and partnership disputes, and
						all areas of estate and gift taxation.
					</p>
					<p>
						Prior to forming Estate Valuation Group, Mr. Fraser served in
						senior-level accounting and managerial positions for various
						companies in the banking, automobile, and real estate industries.
					</p>
				</div>
			</section>
			<section className={`${styles.section} ${styles.sectionSix}`}>
				<div
					className={`${styles.row} ${styles.rowOne}`}
					style={{ position: "relative" }}
				>
					<Image src={logo} alt="Estate Valuation Group Logo" fill />
				</div>
			</section>
		</>
	);
};

export default About;
