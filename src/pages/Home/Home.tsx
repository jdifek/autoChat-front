import Advantages from '../../components/Advantages/Advantages'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import MainCTA from '../../components/MainCTA/MainCTA'
import Reviews from '../../components/Reviews/Reviews'
import Title from '../../components/ui/Title/Title'
import TitleWithAnimation from '../../components/ui/Title/TitleWithAnimation'

export const Home = () => {
	return (
		<div className='heading-section'>
			<TitleWithAnimation />
			<Title as='h2' style={{ marginBottom: '32px' }}>
				Повысьте эффективность коммуникации с помощью искусственного интеллекта
			</Title>
			<div className='section'>
				<Advantages />
			</div>
			<div className='section'>
				<MainCTA />
			</div>
			<div className='section'>
				<Reviews />
			</div>
			<div className='section'>
				<HowItWorks />
			</div>
		</div>
	)
}
