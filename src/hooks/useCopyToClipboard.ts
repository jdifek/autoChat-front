import { useState } from 'react'

export const useCopyToClipboard = (timeout = 2000) => {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setIsCopied(true)
			setTimeout(() => setIsCopied(false), timeout)
		} catch (error) {
			console.error('Ошибка копирования в буфер обмена:', error)
		}
	}

	return { isCopied, copyToClipboard }
}
