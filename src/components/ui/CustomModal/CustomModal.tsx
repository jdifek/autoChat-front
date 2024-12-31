import { Box, Modal } from '@mui/material'
import React, { CSSProperties } from 'react'
import { useTheme } from '../../../context/ThemeContext'

interface ICustomModalProps {
	open: boolean
	onClose: () => void
	children: React.ReactNode
	styles?: CSSProperties
}

const CustomModal = ({
	open,
	onClose,
	children,
	styles,
}: ICustomModalProps) => {
	const { isDarkMode } = useTheme()

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: isDarkMode ? '#333' : 'background.paper',
					color: isDarkMode ? '#fff' : 'inherit',
					boxShadow: 24,
					p: 4,
					borderRadius: 2,
					width: '90%',
					maxWidth: 400,
				}}
			>
				<Box id='modal-description' sx={{ ...styles }}>
					{children}
				</Box>
			</Box>
		</Modal>
	)
}

export default CustomModal
