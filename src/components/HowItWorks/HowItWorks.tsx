import { ParallaxBanner } from 'react-scroll-parallax'
import { useTheme } from '../../context/ThemeContext'
import CTAButton from '../ui/Button/CTAButton'
import Title from '../ui/Title/Title'
import styles from './HowItWorks.module.scss'
import { STEPS } from './steps-items.data'

const HowItWorks = () => {
	const { isDarkMode } = useTheme()

	return (
		<>
			<ParallaxBanner
				layers={[{ image: '/public/images/parallax-bg.jpg', speed: -20 }]}
				className={styles.parallaxWrapper}
			>
				<div className={styles.overlay}></div>
				<div className={styles.box}>
					<h2 className={styles.title}>Как это работает</h2>
					<div className={styles.steps}>
						{STEPS.map((step, index) => (
							<div
								key={index}
								className={`${styles.step} ${isDarkMode ? styles.dark : ''}`}
							>
								<div className={styles.icon}>{step.icon}</div>
								<h3 className={styles.stepTitle}>{step.title}</h3>
								<p className={styles.stepDescription}>{step.description}</p>
							</div>
						))}
					</div>
					<Title className={styles.ctaTitle}>
						Готовы улучшить коммуникацию с клиентами?
					</Title>
					<CTAButton isLink href='/pricing' className={styles.ctaBtn}>
						Попробовать бесплатно
					</CTAButton>
				</div>
			</ParallaxBanner>
		</>
	)
}

export default HowItWorks
