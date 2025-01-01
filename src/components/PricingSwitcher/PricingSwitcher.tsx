import { useState } from 'react'
import styles from './PricingSwitcher.module.scss'

interface IPricingSwitcherProps {
	onSwitch: (isYearly: boolean) => void
}

const PricingSwitcher = ({ onSwitch }: IPricingSwitcherProps) => {
	const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly')

	const handleSwitch = (mode: 'monthly' | 'yearly') => {
		setActiveTab(mode)
		onSwitch(mode === 'yearly')
	}

	return (
		<div className={styles.switcher}>
			<button
				className={activeTab === 'monthly' ? styles.active : ''}
				onClick={() => handleSwitch('monthly')}
			>
				Ежемесячно
			</button>
			<button
				className={activeTab === 'yearly' ? styles.active : ''}
				onClick={() => handleSwitch('yearly')}
			>
				Ежегодно <br /> <span>(Экономия 20%)</span>
			</button>
		</div>
	)
}

export default PricingSwitcher
