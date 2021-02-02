import React from 'react'
import {
	HiArrowLeft,
	HiArrowRight,
	HiOutlineBan,
	HiOutlineCamera,
} from 'react-icons/hi'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	CarouselProviderProps,
	DotGroup,
	ImageWithZoom,
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'
import { Picture } from '../../@types/interfaces'

interface CarouselProps extends Omit<CarouselProviderProps, 'children'> {
	slides?: Picture[]
	className?: string
}

const Carousel: React.FC<CarouselProps> = (props) => {
	return (
		<CarouselProvider className='relative' infinite={true} {...props}>
			<Slider>
				{props.slides?.length ? (
					props.slides?.map((slide, index) => (
						<Slide key={index} index={index}>
							<ImageWithZoom src={slide.path} />
						</Slide>
					))
				) : (
					<Slide index={0}>
						<div className=' h-full flex justify-center items-center bg-gray-200 bg-cover text-gray-300'>
							<HiOutlineBan className='absolute text-9xl' />
							<HiOutlineCamera className='text-gray-400 text-8xl' />
						</div>
					</Slide>
				)}
				<DotGroup />
			</Slider>

			<ButtonBack>
				<button
					id='button-prev'
					className='bg-white text-black-500 shadow-md rounded-full p-2 absolute top-1/2 left-2 z-10 text-2xl hover:opacity-40'
				>
					<HiArrowLeft />
				</button>
			</ButtonBack>
			<ButtonNext>
				<button
					id='button-next'
					className='bg-white  text-black-500 shadow-md rounded-full p-2 absolute top-1/2 right-2 z-10 text-2xl hover:opacity-40'
				>
					<HiArrowRight />
				</button>
			</ButtonNext>
		</CarouselProvider>
	)
}

export default Carousel
