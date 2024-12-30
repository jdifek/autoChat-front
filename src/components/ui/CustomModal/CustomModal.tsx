import { Box, Modal } from '@mui/material'
import React, { CSSProperties } from 'react'

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
					bgcolor: 'background.paper',
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
