import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import CTAButton from '../ui/Button/CTAButton'
import Title from '../ui/Title/Title'
import styles from './PricingCTA.module.scss'

const PricingCTA = () => {
	return (
		<ParallaxBanner
			layers={[{ image: '/images/parallax-bg-supp.jpg', speed: -20 }]}
			className={styles.parallaxWrapper}
		>
			<div className={styles.overlay}></div>
			<motion.div
				className={styles.ctaContainer}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
			>
				<Title className={styles.ctaTitle}>
					Не уверены, какой тариф выбрать?
				</Title>
				<p className={styles.ctaText}>
					Проконсультируйтесь с нашим специалистом.
				</p>
				<CTAButton className={styles.ctaBtn}>Связаться с нами</CTAButton>
			</motion.div>
		</ParallaxBanner>
	)
}

export default PricingCTA
