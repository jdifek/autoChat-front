import { Step } from '../../../types'

export const STEPS_ITEMS: Step[] = [
	{
		title: 'Регистрация аккаунта',
		description:
			'Создайте аккаунт, чтобы начать пользоваться платформой. Следуйте простой пошаговой инструкции.',
		image: '/пример.png',
	},
	{
		title: 'Выбор мессенджера',
		description: 'Выберите платформу для интеграции:',
		messengers: [
			{ name: 'Telegram', icon: 'telegram' },
			{ name: 'WhatsApp', icon: 'whatsapp' },
			{ name: 'Facebook Messenger', icon: 'facebook' },
			{ name: 'Instagram Direct', icon: 'instagram' },
		],
	},
	{
		title: 'Настройка бота',
		description:
			'Используйте интуитивно понятный интерфейс для настройки вашего бота.',
		image: '/пример.png',
	},
	{
		title: 'Интеграция с вашей системой',
		description: 'Настройте связь с вашими системами.',
		diagram: true,
	},
	{
		title: 'Запуск и тестирование',
		description: 'Проверьте ваш бот перед запуском, используя чек-лист.',
		checklist: [
			'Проверка приветственного сообщения.',
			'Тестирование основных сценариев.',
			'Проверка связи с вашей системой.',
			'Анализ логов ошибок.',
		],
	},
]
