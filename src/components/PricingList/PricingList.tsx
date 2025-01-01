import PricingCard from '../PricingCard/PricingCard'
import { PRICING_PLANS } from './pricing-plans.data'
import styles from './PricingList.module.scss'

const PricingList = ({ isYearly }: { isYearly: boolean }) => {
	return (
		<ul className={styles.grid}>
			{PRICING_PLANS.map((plan, index) => (
				<PricingCard
					key={index}
					title={plan.title}
					features={plan.features}
					price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
					isYearly={isYearly}
				/>
			))}
		</ul>
	)
}

export default PricingList
