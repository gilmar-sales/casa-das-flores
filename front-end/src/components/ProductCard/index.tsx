import React from 'react'
import {
	HiArrowRight,
	HiOutlineBan,
	HiOutlineCamera,
	HiOutlineHeart,
	HiPlus,
} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { Product } from '../../@types/interfaces'

interface ProductCardProps {
	product: Product
}
const ProductCard: React.FC<ProductCardProps> = (props) => {
	const ProductImage = () => {
		if (props.product.pictures.length) {
			return (
				<div
					className='h-56 bg-gray-900 bg-cover'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + props.product.pictures[0]
						})`,
					}}
				></div>
			)
		} else {
			return (
				<div className='h-56 flex justify-center items-center bg-gray-300 bg-cover text-gray-400'>
					<HiOutlineBan className='absolute' size={160} />
					<HiOutlineCamera className='text-gray-500' size={110} />
				</div>
			)
		}
	}

	return (
		<div
			{...props}
			className={'w-full border border-gray-300 rounded-md overflow-hidden'}
		>
			<ReactTooltip place='bottom' effect='solid' globalEventOff='hover' />
			<ProductImage />
			<div className='p-2 text-lg text-gray-800 font-bold'>
				{props.product.name}
			</div>
			<div className='p-2  text-gray-800'>{props.product.description}</div>
			<div className='grid grid-cols-8  px-2  text-gray-800 mb-3'>
				<span className='col-span-4 flex items-center text-2xl '>
					R$ {props.product.unitPrice}
				</span>
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
					<Link to={`/product/${props.product.slug}`}>
						<button
							className='rounded-full border border-gray-300 p-2 hover:border-green-500 hover:text-green-500 focus:border-green-500 focus:text-green-500'
							data-tip='Visualizar'
						>
							<HiArrowRight className='h-6 w-6' />
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
