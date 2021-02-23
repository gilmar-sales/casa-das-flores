import React from 'react'
import { IoStar } from 'react-icons/io5'

import { Product } from '../../../@types/interfaces'
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
							props.product?.pictures.length
								? props.product?.pictures.length
								: 1
						}
						slides={props.product?.pictures}
					/>
					<h1 className='text-2xl'>{props.product?.name}</h1>
					<p className='text-gray-500'>{props.product?.description}</p>
				</div>
				<div className='col-span-8 md:col-span-3 gap-8 grid grid-rows-4'>
					<div className='flex flex-col justify-around rounded-md border px-5 py-3'>
						<span className='text-xl '>{props.product?.name}</span>

						<div className='flex justify-between'>
							<div className='flex gap-2'>
								{[...Array(5)].map((_, index) => (
									<IoStar key={index} className='text-yellow-400' />
								))}
								<span className='text-gray-500'>(125)</span>
							</div>
							<span className='text-md'>
								{Number(props.product?.unitPrice).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</span>
						</div>
					</div>
					<div className='flex justify-between rounded-md border px-5 py-4'>
						<span className='text-lg self-center'>Endereço de entrega</span>
					</div>
					<div className='flex flex-col items-center justify-around rounded-md border px-5 py-4'>
						<span className='text-lg '>Dimensões</span>
						<div className='flex justify-around items-center w-full text-gray-500'>
							<span className='text-center'>
								Largura: {Number(props.product?.width)}cm
							</span>
							<span className='text-center'>
								Altura: {Number(props.product?.height)}cm
							</span>
							<span className='text-center'>
								Comprimento: {Number(props.product?.lenght)}cm
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetail
