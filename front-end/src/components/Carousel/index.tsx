import React, { HTMLProps, useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom'
import 'swiper/swiper-bundle.min.css'
import { Swiper, Navigation, Pagination } from 'swiper'
import { ReactIdSwiperCustomProps } from 'react-id-swiper/lib/types'

import './styles.css'

export default function Carousel(props: HTMLProps<HTMLDivElement>) {
	const slides = [
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
		'/images/products/buque.jpg',
	]

	const [width, setWidth] = useState(600)
	const [height, setHeight] = useState('15rem')

	const params: ReactIdSwiperCustomProps = {
		Swiper,
		modules: [Navigation, Pagination],
		initialSlide: 0,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '#button-next',
			prevEl: '#button-prev',
		},
		autoplay: {
			delay: 100,
			disableOnInteraction: false,
		},
		loop: true,
		renderNextButton: () => (
			<button
				id='button-next'
				className='bg-white text-green-500 shadow-md rounded-full p-2 absolute top-1/2 right-2 z-10 text-2xl'
			>
				<HiArrowRight />
			</button>
		),
		renderPrevButton: () => (
			<button
				id='button-prev'
				className='bg-white text-green-500 shadow-md rounded-full p-2 absolute top-1/2 left-2 z-10 text-2xl'
			>
				<HiArrowLeft />
			</button>
		),
	}

	return (
		<div className='w-full'>
			<ReactIdSwiper {...params}>
				<div
					className='bg-gray-500 h-60 bg-cover'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + '/images/products/buque_rosas.jpg'
						})`,
						height: height,
					}}
				>
					Slide 1
				</div>
				<div className='bg-gray-500 h-60' style={{ height: height }}>
					Slide 2
				</div>
				<div className='bg-gray-500 h-60' style={{ height: height }}>
					Slide 3
				</div>
			</ReactIdSwiper>
		</div>
	)
}
