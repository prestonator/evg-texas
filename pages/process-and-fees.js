import styles from "@/src/styles/Fees.module.css";
import RoundCarousel from "@/src/components/Carousel";

const ProcessAndFees = () => {
	return (
		<>
			<section className={styles.sectionOne}>
				<RoundCarousel />
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.colOne}>
					<h1>Our Fees</h1>
				</div>
				<div className={styles.colTwo}>
					<p>
						Estate Valuation Group provides timely business valuation services
						at reasonable fees. In establishing our fees, variables taken into
						account are the number of assets valued, travel time and expenses,
						availability of accurate and complete financial reports,
						accessibility of owners and key management personnel, and the type,
						methods, and purpose to be incorporated into the final valuation
						report document. Below is a list of the valuation services we
						provide and the estimated fees for such services.
					</p>
				</div>
			</section>
			<section className={styles.sectionThree}>
					<div className={styles.blurb}>
						<h3>Business Purchase or Sale Consultation</h3>
						<p>
							This consultation involves the determination of the true net
							profit or owner’s discretionary cash flow, a comparison to
							BIZCOMPS market data, and a Summary Report with an estimated range
							of value.
						</p>
						<span>$2,500 - $4,000</span>
					</div>
					<div className={styles.blurb}>
						<h3>Basic Business Appraisal:</h3>
						<p>
							This valuation project results in a Calculation Report that
							includes the examination of one to three years profit/loss
							statements, tax returns and the determination of adjusted net
							earnings. (cont./expand)
						</p>
						<span>$5,000 - $7,500</span>
					</div>
					<div className={styles.blurb}>
						<h3>Management Information Appraisal</h3>
						<p>
							This valuation project results in a Calculation Report that
							includes a review of three to five years financial statements,
							recasting of profit/loss statements to find discretionary profit,
							an analysis (cont./expand)
						</p>
						<span>$7,500-$10,000</span>
					</div>
			</section>
			<section className={styles.sectionFour}>
				<div className={styles.colOne}>
					<p>
						Our policy is to perform a free initial consultation, prepare a
						customized “Valuation Project Plan” and provide an accurate project
						quote prior to formally being engaged and accepting any project
						fees. We work closely with the owner and management team to gain an
						understanding of a company’s history and the circumstances that
						might have an impact on its value.
					</p>
				</div>
			</section>
		</>
	);
};

export default ProcessAndFees;
