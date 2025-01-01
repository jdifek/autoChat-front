import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { useTheme } from '../../context/ThemeContext'
import { FEATURES_COMPARISON_ITEMS } from './features-comparison.data'

const FeaturesComparisonTable = () => {
	const { isDarkMode } = useTheme()
	return (
		<TableContainer
			component={Paper}
			className={`table-container ${isDarkMode ? 'dark' : ''}`}
		>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Функции</TableCell>
						<TableCell align='center'>Базовый</TableCell>
						<TableCell align='center'>Pro</TableCell>
						<TableCell align='center'>Premium</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{FEATURES_COMPARISON_ITEMS.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row.feature}</TableCell>
							<TableCell align='center'>{row.start}</TableCell>
							<TableCell align='center'>{row.business}</TableCell>
							<TableCell align='center'>{row.corporate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default FeaturesComparisonTable
