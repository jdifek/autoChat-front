import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

interface CTAButtonProps {
	typeBtn?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	children: React.ReactNode
	onClick?: () => void
	isLink?: boolean
	href?: string
	style?: CSSProperties
	className?: string
}

const CTAButton = ({
	typeBtn = 'button',
	disabled,
	onClick,
	isLink = false,
	href = '#',
	children,
	style,
	className,
}: CTAButtonProps) => {
	const buttonElement = (
		<button
			type={typeBtn}
			disabled={disabled}
			className={`cta-button ${className || ''}`}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	)

	return isLink ? <Link to={href}>{buttonElement}</Link> : buttonElement
}

export default CTAButton
