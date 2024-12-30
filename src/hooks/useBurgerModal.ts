import { useState } from 'react'

export const useBurgerModal = () => {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

	const toggleMenu = () => setMenuOpen(!isMenuOpen)

	return {
		isMenuOpen,
		toggleMenu,
	}
}
