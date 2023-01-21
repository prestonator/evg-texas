import ContactForm from "@/src/components/ContactForm";
import styles from "@/src/styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerContents}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={`${styles.row} ${styles.rowOne}`}>
						<h3>EVG Texas</h3>
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<div className={styles.textContainer}>
							<span>Contact</span>
							<a href="tel:972-978-8388">+1 (972) 978-8388</a>
							<a href="mailto:Garland@evg-texas.com">Garland@evg-texas.com</a>
						</div>
						<div className={styles.textContainer}>
							<span>Address</span>
							<p>3912 Gettysburg Circle</p>
							<p>Plano, Texas 75023</p>
						</div>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={styles.textContainer}>
						<h3>Contact</h3>
					</div>
					<div className={styles.formWrapper}>
						<ContactForm />
					</div>
				</div>
			</div>
            <div className={styles.footerCopyright}>
                <p>&copy; 2023 EVG Texas | All Rights Reserved</p>
            </div>
		</footer>
	);
};

export default Footer;
