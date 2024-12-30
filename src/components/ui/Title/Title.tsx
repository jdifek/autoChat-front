import React, { CSSProperties, ElementType } from 'react'

interface ITitleProps {
	children: React.ReactNode
	style?: CSSProperties
	className?: string
	as?: ElementType // Позволяет задавать уровень заголовка (h1 - h6)
}

const Title = ({ style, className, as: Tag = 'h2', children }: ITitleProps) => {
	return (
		<Tag className={`title ${className || ''}`} style={style}>
			{children}
		</Tag>
	)
}

export default Title
