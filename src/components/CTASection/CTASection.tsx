import { useEffect, useRef } from 'react'
import CTAButton from '../ui/Button/CTAButton'
import styles from './CTASection.module.scss'

const CTASection = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const videoElement = videoRef.current

		if (videoElement) {
			videoElement.playbackRate = 0.6 // Замедление видео
		}
	}, [])

	return (
		<div className={styles.box}>
			<div className={styles.videoThumb}>
				<video
					ref={videoRef}
					className={styles.video}
					autoPlay
					muted
					loop
					playsInline
					id='demoVideo'
				>
					<source src='/video/demo-video.mp4' type='video/mp4' />
					Ваш браузер не поддерживает воспроизведение видео.
				</video>
				<div className={styles.overlay} />
			</div>
			<CTAButton isLink href='/pricing'>
				Начать бесплатно
			</CTAButton>
		</div>
	)
}

export default CTASection
