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

	return (
		<div className='flex flex-row'>
			{/* Categories */}
			<div className='hidden md:flex flex-col border-dashed border-r-2 border-green-100 py-2 items-center justify-around'>
				{categories.map((category, index) => (
					<button
						key={index}
						className='text-green-500 hover:bg-green-100 py-2 px-4'
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
						? [...Array(4)].map((value, index) => (
								<div
									key={index}
									className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2'
								>
									<ProductCard loading={true} />
								</div>
						  ))
						: products.map((product, index) => (
								<div
									key={index}
									className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2'
								>
									<ProductCard product={product} />
								</div>
						  ))}
				</div>
				<Pagination numPages={numPages} setPage={setPage} page={page} />
			</div>
		</div>
	)
}
