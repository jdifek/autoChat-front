import { useTheme } from '../../context/ThemeContext'
import styles from './SupportedMessengers.module.scss'
import { MESSENGERS } from './supported-messengers.data'

const SupportedMessengers = () => {
	const { isDarkMode } = useTheme()

	return (
		<div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`}>
			<h2 className={styles.title}>Поддерживаемые мессенджеры</h2>
			<div className={styles.messengerList}>
				{MESSENGERS.map((messenger, index) => (
					<div
						key={index}
						className={`${styles.messengerItem} ${
							isDarkMode ? styles.dark : ''
						}`}
					>
						<div className={styles.icon}>
							<messenger.icon />
						</div>
						<h3 className={styles.name}>{messenger.name}</h3>
						<p className={styles.description}>{messenger.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default SupportedMessengers
