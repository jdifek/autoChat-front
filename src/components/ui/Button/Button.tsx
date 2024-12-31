import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
	styles?: CSSProperties
	typeBtn?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	children: React.ReactNode
	onClick?: () => void
	isLink?: boolean
	href?: string
	className?: string
}

const Button = ({
	typeBtn = 'button',
	disabled,
	styles,
	onClick,
	isLink = false,
	href = '#',
	className,
	children,
}: ButtonProps) => {
	const buttonElement = (
		<button
			type={typeBtn}
			disabled={disabled}
			className={`button ${className || ''}`}
			onClick={onClick}
			style={{
				...styles,
			}}
		>
			{children}
		</button>
	)

	return isLink ? <Link to={href}>{buttonElement}</Link> : buttonElement
}

export default Button
