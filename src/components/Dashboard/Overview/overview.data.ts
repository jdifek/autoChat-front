const ACTIVITY_DATA = {
	labels: [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	],
	datasets: [
		{
			label: 'Активность',
			data: [50, 100, 75, 125, 150, 200, 175],
			borderColor: 'rgba(75, 192, 192, 1)',
			backgroundColor: 'rgba(75, 192, 192, 0.2)',
		},
	],
}

const CATEGORY_DATA = {
	labels: ['Вопросы', 'Жалобы', 'Отзывы', 'Технические проблемы'],
	datasets: [
		{
			data: [40, 25, 20, 15],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
		},
	],
}

export { ACTIVITY_DATA, CATEGORY_DATA }
