import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import { FilteredRows } from '../../../types'

const MessageHistoryTable = ({
	filteredRows,
}: {
	filteredRows: FilteredRows[]
}) => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [order, setOrder] = useState<'asc' | 'desc'>('asc')
	const [orderBy, setOrderBy] = useState('date')

	const { isDarkMode } = useTheme()

	const handleRequestSort = (property: string) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const sortedRows = useMemo(() => {
		return [...filteredRows].sort((a, b) => {
			if (order === 'asc') {
				return a[orderBy] < b[orderBy] ? -1 : 1
			} else {
				return a[orderBy] > b[orderBy] ? -1 : 1
			}
		})
	}, [filteredRows, order, orderBy])

	const paginatedRows = useMemo(() => {
		return sortedRows.slice(
			page * rowsPerPage,
			page * rowsPerPage + rowsPerPage
		)
	}, [sortedRows, page, rowsPerPage])

	return (
		<TableContainer
			component={Paper}
			className={`table-container ${isDarkMode ? 'dark' : ''}`}
		>
			<Table aria-label='message history table'>
				<TableHead>
					<TableRow>
						{['date', 'user', 'messenger', 'message', 'status'].map(column => (
							<TableCell key={column}>
								<TableSortLabel
									active={orderBy === column}
									direction={orderBy === column ? order : 'asc'}
									onClick={() => handleRequestSort(column)}
								>
									{column.charAt(0).toUpperCase() + column.slice(1)}
								</TableSortLabel>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{paginatedRows.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.user}</TableCell>
							<TableCell>{row.messenger}</TableCell>
							<TableCell>{row.message}</TableCell>
							<TableCell>
								<span
									style={{
										color: row.status === 'Прочитано' ? 'green' : 'red',
										fontWeight: 'bold',
									}}
								>
									{row.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10]}
				component='div'
				count={filteredRows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	)
}

export default MessageHistoryTable
