import Analytics from '../Analytics/Analytics'
import MessageHistory from '../MessageHistory/MessageHistory'
import Overview from '../Overview/Overview'
import Statistics from '../Statistics/Statistics'

interface IDashboardContentProps {
	section: string
}

const DashboardContent = ({ section }: IDashboardContentProps) => {
	return (
		<div className='heading-section'>
			{section === 'overview' && <Overview />}
			{section === 'statistics' && <Statistics />}
			{section === 'history' && <MessageHistory />}
			{section === 'analytics' && <Analytics />}
		</div>
	)
}

export default DashboardContent
