import styles from "@/src/styles/Valuation.module.css";
import Image from "next/image";
import houses from "@/public/houses.jpg";
import livingroom from "@/public/livingroom.jpg";
import housewithclouds from "@/public/housewithclouds.jpg";
import redhouse from "@/public/redhouse.jpg";
import { CiBag1 } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import SwiperProcess from "@/src/components/SwiperProcess";


const ValuationProjects = () => {
	return (
		<>
			<section className={styles.sectionOne}>
				<Image src={houses} alt="houses" fill />
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
					<p>
						Certified valuation reports are essential to establishing hte value
						of an ownership interest for IRS tax purposes.
					</p>
				</div>
				<div className={styles.textBlurb}>
					<FaRegHandshake className={styles.icon} />
					<h4>Business Transactions</h4>
					<p>
						Often owners and company management need to know the true value of a
						business and the underlying ownership interests to carry out various
						business transactions,.
					</p>
				</div>
				<div className={styles.textBlurb}>
					<ImHammer2 className={styles.icon} />
					<h4>Litigation</h4>
					<p>
						Our consulting and valuation services provide you with results that
						will stand up in court, assist you in trial preparation.
					</p>
				</div>
			</section>
			<section className={styles.sectionFour}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<h4>Discover the true worth of your assets</h4>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<Image src={livingroom} alt="livingroom" fill />
				</div>
				<div className={`${styles.col} ${styles.colThree}`}>
					<Image src={housewithclouds} alt="House with cloudy overcast" fill />
				</div>
				<div className={`${styles.col} ${styles.colFour}`}>
					<Image src={redhouse} alt="House that is red" fill />
				</div>
				<div className={`${styles.col} ${styles.colFive}`}>
					<p>Expert and accurate assessment of property and assets.</p>
					<p>
						We use the latest market data and industry knowledge to determine
						the fair market value of your property.
					</p>
				</div>
			</section>
			<section className={styles.sectionFive}>
				<h2>Specific Services</h2>
				<hr />
			</section>
			<section className={styles.sectionSix}>
				<div className={styles.textBlurb}>
					<h4>Taxation</h4>
					<hr />
					<ul>
						<li>Estate Planning</li>
						<li>Estate and Gift Taxes</li>
						<li>Charitable Contributions</li>
						<li>Purchase Price Allocations</li>
						<li>Personal and Entity Goodwill</li>
						<li>Built-in Gains</li>
					</ul>
				</div>
				<div className={styles.textBlurb}>
					<h4>Business Transactions</h4>
					<hr />
					<ul>
						<li>Buy/Sell Agreements</li>
						<li>Shareholder Buy-Outs/Buy-Ins</li>
						<li>Corporate Restructurings</li>
						<li>Purchase.Sale of a Business</li>
						<li>Mergers and Acquisitions</li>
					</ul>
				</div>
				<div className={styles.textBlurb}>
					<h4>Litigation</h4>
					<hr />
					<ul>
						<li>Shareholder Disputes</li>
						<li>Divorce, Probate, and Other Family Disputes</li>
						<li>Economic Damages/Losses</li>
					</ul>
				</div>
			</section>
			<section className={styles.sectionSeven}>
				<h2>Process</h2>
				<hr />
			</section>
			<section className={styles.sectionEight}>
				<SwiperProcess />
				</section>
		</>
	);
};

export default ValuationProjects;
