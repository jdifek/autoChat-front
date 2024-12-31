import { FaLock, FaTrashAlt, FaUserShield } from 'react-icons/fa'

export const SECURITY_PRIVACY_ITEMS = [
	{
		icon: FaLock,
		title: 'Шифрование данных',
		descr:
			'Ваши данные шифруются с использованием современных алгоритмов безопасности.',
	},
	{
		icon: FaUserShield,
		title: 'Соответствие GDPR',
		descr:
			'Мы соблюдаем все требования GDPR для защиты вашей конфиденциальности.',
	},
	{
		icon: FaTrashAlt,
		title: 'Удаление данных',
		descr: 'Вы можете запросить удаление всех данных в любое время.',
	},
]
