import { useTheme } from '../../context/ThemeContext'
import { MAIN_FEATURES } from './main-features.data'
import styles from './MainFeatures.module.scss'

const MainFeatures = () => {
	const { isDarkMode } = useTheme()

	return (
		<div className={styles.featuresList}>
			{MAIN_FEATURES.map((feature, index) => (
				<div
					key={index}
					className={`${styles.featureItem} ${isDarkMode ? styles.dark : ''}`}
				>
					<div className={styles.icon}>
						<feature.icon />
					</div>
					<h3 className={styles.featureTitle}>{feature.title}</h3>
					<p className={styles.featureDescription}>{feature.descr}</p>
				</div>
			))}
		</div>
	)
}

export default MainFeatures
