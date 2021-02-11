import React, { useEffect, useState } from 'react'
import { Product } from '../../@types/interfaces'

import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard'
import api from '../../middlewares/api'

export default function Home() {
	const [page, setPage] = useState(1)
	const [numPages, setNumPages] = useState(1)
	const [products, setProducts] = useState<Product[]>([])
	const [categories, setCategories] = useState<Product[]>([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		api.get(`/products/${page}`).then((response) => {
			setNumPages(response.data.pages)
			setProducts(response.data.products)
			setLoading(false)
		})
	}, [page])

	useEffect(() => {
		api.get(`/categories`).then((response) => {
			setCategories((response.data as Array<any>).map((value) => value.name))
		})
	}, [])

	const handlePage = (value: number) => {
		page !== value && setLoading(true)
		setPage(value)
	}
	let clientX = 0

	return (
		<div
			className='flex flex-col'
			onTouchStart={(event) => {
				clientX = event.touches[0].clientX
			}}
			onTouchEndCapture={(event) => {
				if (page > 1 && clientX - event.touches[0].clientX < 0)
					handlePage(page - 1)
				else if (page < numPages) handlePage(page + 1)
			}}
		>
			{/* Categories */}
			<div className='hidden h-10 md:flex flex-row border-dashed  border-green-100 items-center justify-around'>
				{categories.map((category, index) => (
					<button
						key={index}
						className='text-green-500 border-dashed border-b-2 border-green-100  hover:bg-green-100 py-2 px-4'
					>
						{category}
					</button>
				))}
			</div>
			{/* Products */}
			<div className='flex flex-col w-full'>
				<Pagination numPages={numPages} setPage={handlePage} page={page} />
				<div className='grid grid-cols-12 gap-4 p-4'>
					{isLoading
						? [...Array(8)].map((value, index) => (
								<div
									key={index}
									className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3'
								>
									<ProductCard loading={true} />
								</div>
						  ))
						: products.map((product, index) => (
								<div
									key={index}
									className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3'
								>
									<ProductCard product={product} />
								</div>
						  ))}
				</div>
				<Pagination numPages={numPages} setPage={handlePage} page={page} />
			</div>
		</div>
	)
}
