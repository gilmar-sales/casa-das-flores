import React, { useContext, useState } from 'react'
import {
	IoArrowForward,
	IoAdd,
	IoRemove,
	IoBanOutline,
	IoSyncOutline,
	IoTrashOutline,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import ShopBagContext, { BagItem } from '../contexts/ShopBagContext'

interface BagItemProps {
	item?: BagItem
	loading?: boolean
}

const BagItemCard: React.FC<BagItemProps> = ({ item, loading, ...props }) => {
	const [loadingBag, setLoadingBag] = useState(false)
	const shopBagCtx = useContext(ShopBagContext)

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}

	const popItem = async () => {
		setLoadingBag(true)
		shopBagCtx.popItem(item).then(() => setLoadingBag(false))
	}
	const increaseCount = async () => {
		setLoadingBag(true)
		shopBagCtx.increaseCount(item).then(() => setLoadingBag(false))
	}
	const decreaseCount = async () => {
		if (item) {
			if (item.count > 1) {
				setLoadingBag(true)
				shopBagCtx.decreaseCount(item).then(() => setLoadingBag(false))
			}
		}
	}

	const ProductImage = () => {
		if (loading) {
			return <div className='w-full h-full mr-4 bg-gray-200'></div>
		} else if (item?.pictures.length) {
			return (
				<div
					className='w-full h-full bg-cover'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + item.pictures[0].path
						})`,
					}}
				></div>
			)
		} else {
			return (
				<div className='w-full h-full flex justify-center items-center bg-gray-200 bg-cover text-gray-300'>
					<IoBanOutline size={160} />
				</div>
			)
		}
	}

	return (
		<div
			{...props}
			className={`
                w-full
                grid
                grid-cols-6
                gap-2
                border
				rounded-md 
				overflow-hidden
				${loading && 'animate-pulse'}
			 `}
		>
			{!loading && <ReactTooltip place='bottom' effect='solid' />}
			<div className='col-span-2 overflow-hidden'>
				<ProductImage />
			</div>
			<div className='col-span-3 flex flex-col justify-between py-2'>
				{loading ? (
					<div className='w-full h-5   bg-gray-300' />
				) : (
					<div className='w-full mt-2  text-lg text-gray-800 font-bold'>
						{item?.name}
					</div>
				)}
				{loading ? (
					<div className='hidden sm:block py-4 overflow-hidden'>
						<div className='w-full h-4 bg-gray-300' />
						<div className='w-64 mt-2 h-4 bg-gray-300' />
					</div>
				) : (
					<div
						className='hidden sm:block p-2  text-gray-600'
						style={{
							lineHeight: '1.3rem',
							maxHeight: '3rem',
							overflow: 'hidden',
						}}
					>
						{item?.description}
					</div>
				)}
				{loading ? (
					<span className='col-span-4 flex items-center text-2xl '>
						{Number(0).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</span>
				) : (
					<span className='col-span-4 flex items-center text-2xl '>
						{Number(item?.unitPrice).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</span>
				)}
			</div>

			<div className='col-span-1 flex flex-col p-3 items-end justify-between'>
				<Link to={`/store/product/${item?.slug}`} onClick={scrollTop}>
					<button
						className='h-10 w-10 mb-2 flex justify-center items-center rounded-full border border-gray-300  hover:border-green-500 hover:text-green-500 '
						data-tip='Visualizar'
					>
						<IoArrowForward className='h-6 w-6' />
					</button>
				</Link>
				<button
					className='h-10 w-10 flex mb-2 justify-center items-center rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500'
					data-tip='Excluir da cesta'
					onClick={loadingBag ? () => {} : popItem}
				>
					{loadingBag ? (
						<IoSyncOutline className='h-6 w-6 animate-spin' />
					) : (
						<IoTrashOutline className='h-6 w-6' />
					)}
				</button>
				<div className=' flex justify-between items-center'>
					<button
						className='h-8 w-8 flex justify-center items-center rounded-full bg-red-500 text-white hover:bg-red-600 '
						data-tip='Menos 1'
						onClick={loadingBag ? () => {} : decreaseCount}
					>
						<IoRemove className='h-6 w-6' />
					</button>
					<label className='mx-2'>{item ? item.count : 0}</label>
					<button
						className='h-8 w-8 flex justify-center items-center rounded-full bg-green-500 text-white hover:bg-green-600 '
						data-tip='Mais 1'
						onClick={loadingBag ? () => {} : increaseCount}
					>
						<IoAdd className='h-6 w-6' />
					</button>
				</div>
			</div>
		</div>
	)
}
export default BagItemCard
