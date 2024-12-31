import Slider from 'react-slick'
import { useTheme } from '../../context/ThemeContext'
import { REVIEWS } from './reviews-items.data'
import styles from './Reviews.module.scss'

const Reviews = () => {
	const { isDarkMode } = useTheme()

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<div className={styles.reviews}>
			<h2 className={styles.title}>Отзывы наших клиентов</h2>
			<Slider {...settings}>
				{REVIEWS.map((review, index) => (
					<div key={index} className={styles.review}>
						<img src={review.img} alt={review.name} className={styles.img} />
						<div className={styles.content}>
							<h3 className={styles.name}>{review.name}</h3>
							<p className={styles.company}>{review.company}</p>
							<p className={`${styles.text} ${isDarkMode ? styles.dark : ''}`}>
								{review.text}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Reviews
