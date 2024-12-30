import Advantages from '../../components/Advantages/Advantages'
import CTASection from '../../components/CTASection/CTASection'
import Title from '../../components/ui/Title/Title'
import TitleWithAnimation from '../../components/ui/Title/TitleWithAnimation'

export const Home = () => {
	return (
		<div className='section'>
			<TitleWithAnimation />
			<Title as='h2'>
				Повысьте эффективность коммуникации с помощью искусственного интеллекта
			</Title>
			<Advantages />
			<CTASection />
		</div>
	)
}
