import React from 'react'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

import { IconButton } from '@material-ui/core'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import './styles.css'

const CustomCarousel = () => {
	const slides = [
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
	]

	const params = {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		renderPrevButton: () => (
			<IconButton className='button-prev'>
				<FiArrowLeft color='#43a047' />
			</IconButton>
		),
		renderNextButton: () => (
			<IconButton className='button-next'>
				<FiArrowRight color='#43a047' />
			</IconButton>
		),
	}

	return (
		<div>
			<Swiper {...params}>
				{slides.map((image) => (
					<div
						style={{
							height: 300,
							width: '100%',
							backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					></div>
				))}
			</Swiper>
		</div>
	)
}

export default CustomCarousel
