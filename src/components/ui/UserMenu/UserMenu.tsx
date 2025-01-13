import { Avatar, Divider, ListItemIcon } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { MdDashboard, MdLogout, MdOutlineSettings } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import stringAvatar from '../../../helpers/stringAvatar'

interface IUserMenu {
	user: {
		fullName: string
		avatarUrl: string
	}
	onClickLogout: () => void
}

export const UserMenu = ({ user, onClickLogout }: IUserMenu) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const navigate = useNavigate()

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const navigateToDashboard = () => {
		navigate('/dashboard')
	}

	const navigateToSettings = () => {
		navigate('/bot-set')
	}

	return (
		<div>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{
					color: 'inherit',
					fontFamily: 'inherit',
					fontSize: '20px',
					fontWeight: '600',
					lineHeight: '1.2',
					textTransform: 'none',
					borderRadius: '16px',

					'&:hover': {
						backgroundColor: '#c0c5d0',
					},
				}}
			>
				{user.avatarUrl ? (
					<Avatar src={user.avatarUrl} />
				) : (
					<Avatar {...stringAvatar(user.fullName)} />
				)}
				<span style={{ fontSize: 16, marginLeft: 8 }}>{user.fullName}</span>
			</Button>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&::before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem
					onClick={() => {
						handleClose()
						navigateToDashboard()
					}}
				>
					<MdDashboard />
					Панель управления
				</MenuItem>
				<Divider />
				<MenuItem
					onClick={() => {
						handleClose()
						navigateToSettings()
					}}
				>
					<ListItemIcon>
						<MdOutlineSettings fontSize={20} />
					</ListItemIcon>
					Настройки
				</MenuItem>
				<MenuItem onClick={onClickLogout}>
					<ListItemIcon>
						<MdLogout fontSize={20} />
					</ListItemIcon>
					Выход
				</MenuItem>
			</Menu>
		</div>
	)
}
