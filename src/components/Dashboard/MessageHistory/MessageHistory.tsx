import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FilteredRows } from '../../../types'
import MessageHistoryTable from '../MessageHistoryTable/MessageHistoryTable'
import { MESSAGE_HISTORY_DATA } from './message-history.data'
import styles from './MessageHistory.module.scss'

const MessageHistory = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredRows: FilteredRows[] = useMemo(() => {
		const term = searchTerm.toLowerCase().trim()
		return MESSAGE_HISTORY_DATA.filter(row =>
			[row.user, row.message].some(value => value?.toLowerCase().includes(term))
		)
	}, [searchTerm])

	return (
		<motion.div
			className={styles.container}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2>История сообщений</h2>
			<div className={styles.filters}>
				<input
					type='text'
					placeholder='Поиск по пользователю или содержимому...'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					className={styles.searchInput}
				/>
			</div>
			<MessageHistoryTable filteredRows={filteredRows} />
		</motion.div>
	)
}

export default MessageHistory
