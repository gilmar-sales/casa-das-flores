import React from 'react'

import { Product } from '../../@types/interfaces'
import ProductSlide from '../ProductSlide'

interface ProductDetailProps {
	product?: Product
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
	return (
		<>
			<div className='grid grid-cols-8 gap-4 p-4'>
				<div className='col-span-8 md:col-span-5'>
					<ProductSlide
						naturalSlideWidth={8}
						naturalSlideHeight={6}
						totalSlides={
							props.product?.pictures?.length !== undefined
								? props.product?.pictures.length
								: 1
						}
						slides={props.product?.pictures}
					/>
					<h1 className='text-2xl'>{props.product?.name}</h1>
					<p className='text-gray-500'>{props.product?.description}</p>
				</div>
				<div className='col-span-8 md:col-span-3 gap-8 grid grid-rows-4'>
					<div className='flex justify-between rounded-md border px-5 py-4'>
						<text className='text-xl self-center'>{props.product?.name}</text>
						<text className='text-md self-center'>
							{Number(props.product?.unitPrice).toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</text>
					</div>
					<div className='flex justify-between rounded-md border px-5 py-4'>
						<text className='text-lg self-center'>Endereço de entrega</text>
					</div>
					<div className='flex flex-col items-center justify-around rounded-md border px-5 py-4'>
						<text className='text-lg '>Dimensões</text>
						<div className='text-gray-500'>w | h | d</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetail
