import React, { createContext, useEffect, useState } from 'react'
import { Product } from '../@types/interfaces'
import api from '../middlewares/api'

interface BagItem extends Product {
	count: number
}

interface ContextProps {
	items: BagItem[]
	setItems: React.Dispatch<React.SetStateAction<BagItem[]>>
	contains: (product?: Product) => boolean
	pushItem: (product?: Product) => Promise<void>
	popItem: (product?: Product) => Promise<void>
}

const ShopBagContext = createContext<ContextProps>({} as ContextProps)

export const ShopBagProvider: React.FC = ({ children }) => {
	const [items, setItems] = useState<BagItem[]>([])

	useEffect(() => {
		api.get('/customer/shopbag').then((response) => {
			setItems(response.data)
		})
	}, [setItems])

	const contains: (product?: Product) => boolean = (product) => {
		if (product) {
			return (
				items.find((element) => {
					console.log(element)

					return element.id === product.id
				}) !== undefined
			)
		}

		return false
	}

	const pushItem = async (product?: Product) => {
		await api
			.post('/customer/shopbag', { product_id: product?.id })
			.then((response) => {
				if (product) {
					setItems([...items, { ...product, count: 1 }])
				}
			})
			.catch((error) => console.log(error))
	}

	const popItem = async (product?: Product) => {
		await api.delete(`/customer/shopbag/${product?.id}`).then((response) => {
			if (response.status === 200) {
				if (product) {
					items.splice(
						items.findIndex((element) => element.id === product.id),
						1
					)
					setItems([...items])
				}
			}
		})
	}

	return (
		<ShopBagContext.Provider
			value={{
				items,
				setItems,
				contains,
				pushItem,
				popItem,
			}}
		>
			{children}
		</ShopBagContext.Provider>
	)
}
export default ShopBagContext
