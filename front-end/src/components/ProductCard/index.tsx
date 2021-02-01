import React from 'react'
import {
	HiArrowRight,
	HiOutlineBan,
	HiOutlineCamera,
	HiOutlineHeart,
	HiPlus,
} from 'react-icons/hi'
import { IoArrowForward, IoBanOutline, IoCameraOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { Product } from '../../@types/interfaces'

interface ProductCardProps {
	product?: Product
	loading?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	loading,
	...props
}) => {
	const ProductImage = () => {
		if (loading) {
			return (
				<div className='h-56 flex justify-center items-center bg-gray-200'></div>
			)
		} else if (product?.pictures.length) {
			return (
				<div
					className='h-56 bg-cover'
					style={{
						background: `url(${process.env.PUBLIC_URL + product.pictures[0]})`,
					}}
				></div>
			)
		} else {
			return (
				<div className='h-56 flex justify-center items-center bg-gray-200 bg-cover text-gray-300'>
					<IoBanOutline className='absolute' size={160} />
					<IoCameraOutline className='text-gray-400' size={110} />
				</div>
			)
		}
	}

	return (
		<div
			{...props}
			className={'w-full h-full border border-gray-300 rounded-md'}
		>
			<ReactTooltip place='bottom' effect='solid' globalEventOff='hover' />
			<ProductImage />
			{loading ? (
				<div className='w-52 m-3 h-4 bg-gray-300 text-lg text-gray-800 font-bold'></div>
			) : (
				<div className='p-2 text-lg text-gray-800 font-bold'>
					{product?.name}
				</div>
			)}
			{loading ? (
				<div>
					<div className='w-64 m-3 h-4 bg-gray-300 text-lg text-gray-800 font-bold'></div>
					<div className='w-64 m-3 h-4 bg-gray-300 text-lg text-gray-800 font-bold'></div>
				</div>
			) : (
				<div className='p-2  text-gray-800'>{product?.description}</div>
			)}
			<div className='grid grid-cols-8  px-2  text-gray-800 mb-3'>
				{loading ? (
					<span className='col-span-4 flex items-center text-2xl '>
						{Number(0).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</span>
				) : (
					<span className='col-span-4 flex items-center text-2xl '>
						{Number(product?.unitPrice).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</span>
				)}
				<div className='col-span-4 flex justify-between '>
					<button
						className='rounded-full border border-gray-300 p-2 hover:border-green-500 hover:text-green-500 focus:border-green-500 focus:text-green-500'
						data-tip='Adicionar à lista de desejos'
					>
						<HiOutlineHeart className='h-6 w-6' />
					</button>
					<button
						className='rounded-full border border-gray-300 p-2 hover:border-green-500 hover:text-green-500 focus:border-green-500 focus:text-green-500'
						data-tip='Adicionar à cesta'
					>
						<HiPlus className='h-6 w-6' />
					</button>
					<Link to={`/store/product/${product?.slug}`}>
						<button
							className='rounded-full border border-gray-300 p-2 hover:border-green-500 hover:text-green-500 focus:border-green-500 focus:text-green-500'
							data-tip='Visualizar'
						>
							<IoArrowForward className='h-6 w-6' />
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
