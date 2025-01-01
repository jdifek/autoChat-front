import { FaCheck, FaCopy } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import Button from '../ui/Button/Button'
import styles from './APIDocsPreview.module.scss'
import { EXAMPLE_CODE } from './example-code.data'

const APIDocsPreview = () => {
	const { isCopied, copyToClipboard } = useCopyToClipboard()

	const handleCopy = () => {
		copyToClipboard(EXAMPLE_CODE)
	}

	return (
		<div className={styles.box}>
			<h2 className={styles.title}>API Интеграция</h2>
			<p className={styles.description}>
				Наше API предоставляет мощные инструменты для работы с клиентскими
				данными, автоматизации процессов и интеграции с вашими системами.
				Легкость в использовании и высокая производительность — основные
				преимущества нашей платформы.
			</p>
			<div className={styles.codeBlock}>
				<SyntaxHighlighter
					language='javascript'
					style={dracula}
					customStyle={{
						margin: 0,
						border: 'none',
						padding: '16px 16px 16px 16px',
					}}
				>
					{EXAMPLE_CODE}
				</SyntaxHighlighter>
				<button
					className={styles.copyBtn}
					onClick={handleCopy}
					aria-label='Копировать код'
				>
					{isCopied ? <FaCheck /> : <FaCopy />}
				</button>
			</div>
			<Button isLink href='/api-docs'>
				Подробнее об API
			</Button>
		</div>
	)
}

export default APIDocsPreview
