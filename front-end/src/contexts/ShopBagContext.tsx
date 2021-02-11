import React, { createContext, useEffect, useState } from 'react'
import { Product } from '../@types/interfaces'
import api from '../middlewares/api'
import { isAuthenticated } from '../middlewares/auth'
import usePersistedState from '../utils/usePersistedState'

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
	const [items, setItems] = usePersistedState<BagItem[]>(
		isAuthenticated() ? 'userBag' : 'guessBag',
		[]
	)

	useEffect(() => {
		if (isAuthenticated())
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
		if (isAuthenticated()) {
			await api
				.post('/customer/shopbag', { product_id: product?.id })
				.then((response) => {
					if (product) {
						setItems([...items, { ...product, count: 1 }])
					}
				})
				.catch((error) => console.log(error))
		} else if (product) setItems([...items, { ...product, count: 1 }])
	}

	const popItem = async (product?: Product) => {
		if (isAuthenticated()) {
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
		} else if (product) {
			items.splice(
				items.findIndex((element) => element.id === product.id),
				1
			)
			setItems([...items])
		}
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
