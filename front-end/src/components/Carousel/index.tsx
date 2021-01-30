import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	CarouselProviderProps,
	DotGroup,
	Image,
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'

interface CarouselProps extends Omit<CarouselProviderProps, 'children'> {
	slides: string[]
	className?: string
}

const Carousel: React.FC<CarouselProps> = (props) => {
	return (
		<CarouselProvider className='relative' infinite={true} {...props}>
			<Slider>
				{props.slides.map((slide, index) => (
					<Slide key={index} index={index}>
						<Image
							isBgImage
							hasMasterSpinner
							src={slide}
							style={{ height: 'auto' }}
						/>
					</Slide>
				))}
				<DotGroup />
			</Slider>

			<ButtonBack>
				<button
					id='button-prev'
					className='bg-white opacity-30 text-green-500 shadow-md rounded-full p-2 absolute top-1/2 left-2 z-10 text-2xl hover:opacity-40'
				>
					<HiArrowLeft />
				</button>
			</ButtonBack>
			<ButtonNext>
				<button
					id='button-next'
					className='bg-white opacity-30 text-green-500 shadow-md rounded-full p-2 absolute top-1/2 right-2 z-10 text-2xl hover:opacity-40'
				>
					<HiArrowRight />
				</button>
			</ButtonNext>
		</CarouselProvider>
	)
}

export default Carousel
