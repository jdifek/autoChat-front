// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
// import { Doughnut } from 'react-chartjs-2'

// ChartJS.register(ArcElement, Tooltip, Legend)

// const data = {
// 	labels: ['Этап 1', 'Этап 2', 'Этап 3'],
// 	datasets: [
// 		{
// 			label: 'Процесс',
// 			data: [300, 200, 100],
// 			backgroundColor: ['#00c0ff', '#ff6363', '#ffc107'],
// 		},
// 	],
// }

// const Diagram = () => {
// 	return (
// 		<div style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
// 			<Doughnut data={data} />
// 		</div>
// 	)
// }

// export default Diagram

import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import styles from './Diagram.module.scss'

const initialNodes = [
	{
		id: '1',
		position: { x: 100, y: 100 },
		data: { label: 'Система 1' },
	},
	{
		id: '2',
		position: { x: 400, y: 100 },
		data: { label: 'Система 2' },
	},
]

const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2', animated: true, label: 'Интеграция' },
]

const Diagram = () => {
	return (
		<div className={styles.diagramContainer}>
			<ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
				<Controls />
				<Background color='#c0c5d0' gap={16} />
			</ReactFlow>
		</div>
	)
}

export default Diagram
