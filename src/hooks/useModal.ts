import { useState } from 'react'

export const useModal = () => {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

	const toggleMenu = () => setMenuOpen(!isMenuOpen)

	return {
		isMenuOpen,
		toggleMenu,
	}
}
