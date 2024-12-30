import { useTheme } from '../../context/ThemeContext'
import { ADVANTAGES } from './advantages.data'
import styles from './Advantages.module.scss'

const Advantages = () => {
	const { isDarkMode } = useTheme()

	return (
		<div className='wrapper'>
			<ul className={styles.list}>
				{ADVANTAGES.map((item, index) => (
					<li
						key={index}
						className={`${styles.item} ${isDarkMode ? styles.dark : ''}`}
					>
						<div
							className={`${styles.iconThumb} ${isDarkMode ? styles.dark : ''}`}
						>
							<item.icon />
						</div>
						<h3 className={styles.item__title}>{item.title}</h3>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Advantages
