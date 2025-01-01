import { useState } from 'react'
import FAQPricing from '../../components/FAQPricing/FAQPricing'
import FeaturesComparisonTable from '../../components/FeaturesComparisonTable/FeaturesComparisonTable'
import PricingCTA from '../../components/PricingCTA/PricingCTA'
import PricingList from '../../components/PricingList/PricingList'
import PricingSwitcher from '../../components/PricingSwitcher/PricingSwitcher'
import Title from '../../components/ui/Title/Title'

export const Pricing = () => {
	const [isYearly, setIsYearly] = useState(false)

	return (
		<div className='heading-section'>
			<Title as='h1' className='title-animated'>
				Выберите подходящий тариф
			</Title>
			<div className='section'>
				<PricingSwitcher onSwitch={setIsYearly} />
			</div>
			<div className='section'>
				<PricingList isYearly={isYearly} />
			</div>
			<div className='section'>
				<FeaturesComparisonTable />
			</div>
			<div className='section'>
				<FAQPricing />
			</div>
			<div className='section'>
				<PricingCTA />
			</div>
		</div>
	)
}
