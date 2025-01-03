import { Scenario } from '../../types'

export const CHAT_SCENARIOS: Scenario[] = [
	{
		name: 'Общий запрос',
		welcomeMessage: 'Здравствуйте! Чем могу помочь?',
		responses: [
			{ pattern: /привет/i, reply: 'Привет! Чем могу помочь?' },
			{
				pattern: /работа/i,
				reply: 'Мы помогаем автоматизировать общение с клиентами.',
			},
			{
				pattern: /как/i,
				reply: 'Мы используем передовые технологии для удобства работы.',
			},
			{
				pattern: /автоматизация/i,
				reply: 'Наш продукт помогает автоматизировать рутину.',
			},
			{ pattern: /.*/, reply: 'Спасибо за ваш запрос! Чем ещё могу помочь?' },
		],
	},
	{
		name: 'Техническая поддержка',
		welcomeMessage:
			'Добрый день! Опишите вашу проблему, и я постараюсь помочь.',
		responses: [
			{ pattern: /проблема/i, reply: 'Уточните, в чём именно проблема?' },
			{
				pattern: /устройство/i,
				reply: 'Напишите, какое устройство вы используете.',
			},
			{
				pattern: /ошибка/i,
				reply: 'Укажите текст ошибки, чтобы я мог помочь.',
			},
			{
				pattern: /сеть/i,
				reply:
					'Проверьте соединение с интернетом и напишите, если проблема останется.',
			},
			{
				pattern: /.*/,
				reply: 'Опишите проблему подробнее, чтобы я мог помочь.',
			},
		],
	},
	{
		name: 'Запрос информации',
		welcomeMessage: 'Здравствуйте! С радостью отвечу на ваши вопросы.',
		responses: [
			{
				pattern: /тариф/i,
				reply: 'У нас есть три тарифа: Базовый, Продвинутый и Премиум.',
			},
			{
				pattern: /подробнее/i,
				reply:
					'Базовый тариф для малого бизнеса, Премиум — для крупных компаний.',
			},
			{
				pattern: /цена/i,
				reply: 'Цены зависят от выбранного тарифа. Хотите узнать больше?',
			},
			{
				pattern: /скидки/i,
				reply:
					'Мы предлагаем скидки для новых клиентов. Напишите, если интересно!',
			},
			{ pattern: /.*/, reply: 'Напишите, если есть ещё вопросы.' },
		],
	},
	{
		name: 'Отзывы',
		welcomeMessage:
			'Здравствуйте! Хотите оставить отзыв или узнать мнение других пользователей?',
		responses: [
			{
				pattern: /оставить/i,
				reply: 'Вы можете оставить отзыв на нашем сайте.',
			},
			{ pattern: /посмотреть/i, reply: 'Отзывы доступны на главной странице.' },
			{
				pattern: /рекомендации/i,
				reply: 'Наши пользователи часто хвалят удобство и функциональность.',
			},
			{
				pattern: /жалоба/i,
				reply: 'Опишите вашу проблему, и мы постараемся помочь.',
			},
			{ pattern: /.*/, reply: 'Спасибо за ваш запрос! Ждём ваши вопросы.' },
		],
	},
]
