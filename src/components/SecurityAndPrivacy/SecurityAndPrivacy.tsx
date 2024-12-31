import { useTheme } from '../../context/ThemeContext'
import styles from './SecurityAndPrivacy.module.scss'
import { SECURITY_PRIVACY_ITEMS } from './security-privacy.data'

const SecurityAndPrivacy = () => {
	const { isDarkMode } = useTheme()

	return (
		<div className={styles.box}>
			<h2 className={styles.title}>Безопасность и конфиденциальность</h2>
			<div className={styles.features}>
				{SECURITY_PRIVACY_ITEMS.map((item, index) => (
					<div
						key={index}
						className={`${styles.feature} ${isDarkMode ? styles.dark : ''}`}
					>
						<div className={styles.icon}>
							<item.icon />
						</div>
						<h3 className={styles.featureTitle}>{item.title}</h3>
						<p className={styles.featureDescription}>{item.descr}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default SecurityAndPrivacy
