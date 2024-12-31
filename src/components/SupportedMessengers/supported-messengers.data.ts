import {
	FaFacebookMessenger,
	FaInstagram,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa'

export const MESSENGERS = [
	{
		icon: FaTelegramPlane,
		name: 'Telegram',
		description:
			'Быстрая интеграция для отправки сообщений и получения уведомлений.',
	},
	{
		icon: FaWhatsapp,
		name: 'WhatsApp',
		description:
			'Интеграция для обработки запросов клиентов и отправки медиафайлов.',
	},
	{
		icon: FaFacebookMessenger,
		name: 'Facebook Messenger',
		description: 'Автоматизация общения с клиентами через страницу бренда.',
	},
	{
		icon: FaInstagram,
		name: 'Instagram Direct',
		description: 'Поддержка прямого общения с клиентами через социальные сети.',
	},
]
