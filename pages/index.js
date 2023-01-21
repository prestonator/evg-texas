import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/src/styles/Home.module.css";
import conferenceTable from "@/src/images/conferenceTable.jpg";
import SwiperCoverflow from "@/src/components/SwiperCoverFlow";
import headway from "@/public/headway.jpg";
import ContactForm from "@/src/components/ContactForm";

export default function Home() {
	return (
		<>
			<div className={styles.sectionOne}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<div className={styles.col}>
						SOLVE<span>YOUR</span>
						<hr style={{ width: "25%", marginLeft: "2rem" }} />
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<div className={styles.col}>
						<span>SOLUTION</span>WITH US
					</div>
				</div>
				<div
					className={`${styles.row} ${styles.rowThree}`}
					style={{ position: "relative", width: "100%", height: "30rem" }}
				>
					<Image
						src={conferenceTable}
						alt="conference table"
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className={`${styles.row} ${styles.rowFour}`}>
					<div className={styles.sideBar}>
						<span>Texas</span>
						<hr style={{ width: "90%" }} />
						<span>Oklahoma</span>
						<hr style={{ width: "90%" }} />
						<span>Kansas</span>
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowFive}`}>
					<div className={styles.col}>
						<p>
							Estate Valuation Group conducts certified business valuations for
							a variety of purposes in the Texas, Oklahoma, and Kansas areas. We
							conduct business valuations for small or medium-sized closely held
							companies in virtually every industry or profession.
						</p>
					</div>
				</div>
			</div>
			<hr style={{ width: "75%", marginRight: "0", margin: "5rem auto" }} />
			<div className={styles.sectionTwo}>
				<div className={`${styles.colMobile}`}>
					<h3>
						Evaluation
						<br />
						Purposes
					</h3>
				</div>
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={`${styles.row} ${styles.rowOne}`}>
						<h3>
							Evaluation
							<br />
							Purposes
						</h3>
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<p>
							Owners of closely held businesses need to value their companies
							and ownership interests for a variety of reasons.
							<br />
							<br />
							Accurate and careful analysis of a company’s financial history,
							management and operations to determine accurate, well-supported
							valuations.
						</p>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<SwiperCoverflow />
				</div>
			</div>
			<div className={styles.sectionThree}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={styles.textContainer}>
						<h3>
							Our
							<br />
							Process
						</h3>
					</div>
					<div className={styles.textBgOverlay}>
						<span>
							Our
							<br />
							Process
						</span>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={`${styles.row} ${styles.rowOne}`}>
						<p>
							Preliminary discussion, project proposal, data gathering, research
							and analysis
						</p>
					</div>
					<div className={`${styles.row} ${styles.rowTwo}`}>
						<hr />
					</div>
					<div className={`${styles.row} ${styles.rowThree}`}>
						<p>LEARN MORE</p>
					</div>
				</div>
			</div>
			<div className={styles.sectionFour}>
				<Image
					src={headway}
					fill
					style={{ objectFit: "cover" }}
					alt="Person deliberating with laptop"
				/>
			</div>
		</>
	);
}
