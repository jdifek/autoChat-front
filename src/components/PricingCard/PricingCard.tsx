import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import styles from './PricingCard.module.scss'

interface IPricingCardProps {
	title: string
	features: string[]
	price: string
	isYearly: boolean
}

const PricingCard = ({
	title,
	features,
	price,
	isYearly,
}: IPricingCardProps) => {
	const { isDarkMode } = useTheme()

	return (
		<motion.li
			className={`${styles.card} ${isYearly ? styles.yearly : ''} ${
				isDarkMode ? styles.dark : ''
			}`}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.05 }}
		>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.features}>
				{features.map((feature, index) => (
					<li
						key={index}
						className={`${styles.feature} ${isYearly ? styles.yearly : ''}`}
					>
						{feature}
					</li>
				))}
			</ul>
			<div className={`${styles.price} ${isYearly ? styles.yearly : ''}`}>
				{price}
			</div>
		</motion.li>
	)
}

export default PricingCard
