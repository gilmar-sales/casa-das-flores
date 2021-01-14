import React from 'react'
import { Product } from '../../@types/interfaces'

import Carousel from '../../components/Carousel'
import ProductCard from '../../components/ProductCard'

export default function Home() {
	const products: Product[] = [
		{
			id: 0,
			name: 'Buquê de Rosas',
			description: 'Id laboris anim magna laboris eu veniam laborum id esse.',
			price: 0,
			image: '/images/products/buque.jpg',
			category: 'Rosas',
		},
	]

	return (
		<div>
			{/* Slides */}
			<div className='flex justify-center items-center w-full mb-4'>
				<div className='w-full md:w-10/12 lg:w-7/12'>
					<Carousel />
				</div>
			</div>
			{/* Products */}
			<div className='grid grid-cols-12 gap-4 px-4 my-4'>
				{[...Array(12)].map((value) => (
					<div key={value} className='col-span-12 sm:col-span-6 md:col-span-3'>
						<ProductCard product={products[0]} />
					</div>
				))}
			</div>
		</div>
	)
}
