import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../../../context/ThemeContext'
import { Messenger } from '../../../types'
import styles from './MessengerIcons.module.scss'

interface IMessengerIconsProps {
	messengers: Messenger[]
}

const MessengerIcons = ({ messengers }: IMessengerIconsProps) => {
	const iconMap: Record<Messenger['icon'], JSX.Element> = {
		telegram: <FaTelegram />,
		whatsapp: <FaWhatsapp />,
		facebook: <FaFacebook />,
		instagram: <FaInstagram />,
	}
	const { isDarkMode } = useTheme()

	return (
		<div
			className={`${styles.messengerIcons} ${isDarkMode ? styles.dark : ''}`}
		>
			{messengers.map((messenger, index) => (
				<div key={index} className={styles.messenger}>
					{iconMap[messenger.icon]}
					<span>{messenger.name}</span>
				</div>
			))}
		</div>
	)
}

export default MessengerIcons
