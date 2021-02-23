import React, { useContext } from 'react'

import BagItemCard from '../../molecules/BagItemCard'
import ShopBagContext from '../../../contexts/ShopBagContext'

export default function ShopBag() {
	const shopBagCtx = useContext(ShopBagContext)

	return (
		<div>
			<h1 className='text-2xl p-4'>
				Cesta de Compras ({shopBagCtx.items.length})
			</h1>
			<div className='grid grid-cols-6'>
				<div className='col-span-6 md:col-span-3 flex flex-col p-4'>
					{shopBagCtx.items.map((item, index) => (
						<div className='mt-4'>
							<BagItemCard key={index} item={item} />
						</div>
					))}
				</div>
				<div className='col-span-0 md:col-span-1' />
				<div className='col-span-6 md:col-span-2 p-4'>
					<div className='flex border rounded-md p-4'>
						<h1 className='text-2xl'>Resumo da compra:</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
