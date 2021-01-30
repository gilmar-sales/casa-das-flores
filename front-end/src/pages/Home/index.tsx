import React, { useEffect, useState } from 'react'
import { Product } from '../../@types/interfaces'

import Carousel from '../../components/Carousel'
import ProductCard from '../../components/ProductCard'
import api from '../../middlewares/api'

export default function Home() {
	const [page, setPage] = useState(1)
	const [numPages, setNumPages] = useState(1)
	const [products, setProducts] = useState<Product[]>([])

	const slides = [
		'/images/products/buque_rosas.jpg',
		'/images/products/buque_astromelias.jpg',
		'/images/products/buque_flores_mistas.jpg',
	]

	useEffect(() => {
		api.get(`/products/${page}`).then((response) => {
			setNumPages(response.data.pages)
			setProducts(response.data.products)
		})
	}, [page])

	return (
		<div>
			{/* Slides */}
			<div className='flex justify-center items-center w-full mb-4'>
				<div className='w-full md:w-10/12 lg:w-7/12'>
					<Carousel
						naturalSlideWidth={8}
						naturalSlideHeight={4}
						totalSlides={3}
						slides={slides}
					/>
				</div>
			</div>
			{/* Products */}
			<div className='grid grid-cols-12 gap-4 px-4 my-4'>
				{products.map((product, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 md:col-span-3'>
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	)
}
