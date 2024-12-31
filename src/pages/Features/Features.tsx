import APIDocsPreview from '../../components/APIDocsPreview/APIDocsPreview'
import ChatSimulator from '../../components/ChatSimulator/ChatSimulator'
import MainFeatures from '../../components/MainFeatures/MainFeatures'
import SecurityAndPrivacy from '../../components/SecurityAndPrivacy/SecurityAndPrivacy'
import SupportedMessengers from '../../components/SupportedMessengers/SupportedMessengers'
import Title from '../../components/ui/Title/Title'
import styles from './Features.module.scss'

export const Features = () => {
	return (
		<div className='heading-section'>
			<Title as='h1' className='title-animated'>
				Возможности нашего AI-ассистента
			</Title>
			<Title as='h2' className={styles.title}>
				Откройте новый уровень клиентского сервиса
			</Title>
			<div className='section'>
				<MainFeatures />
			</div>
			<div className='section'>
				<SupportedMessengers />
			</div>
			<div className='section'>
				<ChatSimulator />
			</div>
			<div className='section'>
				<SecurityAndPrivacy />
			</div>
			<div className='section'>
				<APIDocsPreview />
			</div>
		</div>
	)
}
