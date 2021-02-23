import React, { createContext, useEffect } from 'react'
import { Product } from '../@types/interfaces'
import api from '../middlewares/api'
import { IsAuthenticated } from '../middlewares/auth'
import usePersistedState from '../utils/usePersistedState'

export interface BagItem extends Product {
	count: number
}

interface ContextProps {
	items: BagItem[]
	setItems: React.Dispatch<React.SetStateAction<BagItem[]>>
	contains: (product?: Product) => boolean
	pushItem: (product?: Product) => Promise<void>
	popItem: (product?: Product) => Promise<void>
	increaseCount: (product?: Product) => Promise<void>
	decreaseCount: (product?: Product) => Promise<void>
}

const ShopBagContext = createContext<ContextProps>({} as ContextProps)

export const ShopBagProvider: React.FC = ({ children }) => {
	const [items, setItems] = usePersistedState<BagItem[]>(
		IsAuthenticated() ? 'userBag' : 'guessBag',
		[]
	)

	useEffect(() => {
		if (IsAuthenticated())
			api.get('/customer/shopbag').then((response) => {
				setItems(response.data)
			})
	}, [setItems])

	const contains: (product?: Product) => boolean = (product) => {
		if (product) {
			return items.find((element) => element.id === product.id) !== undefined
		}

		return false
	}

	const pushItem = async (product?: Product) => {
		const _pushItem = () => {
			if (product) {
				setItems([...items, { ...product, count: 1 }])
			}
		}

		if (IsAuthenticated()) {
			await api
				.post('/customer/shopbag', { product_id: product?.id })
				.then((response) => {
					_pushItem()
				})
				.catch((error) => console.log(error))
		} else _pushItem()
	}

	const popItem = async (product?: Product) => {
		const _popItem = () => {
			if (product) {
				items.splice(
					items.findIndex((element) => element.id === product.id),
					1
				)
				setItems([...items])
			}
		}

		if (IsAuthenticated()) {
			await api.delete(`/customer/shopbag/${product?.id}`).then((response) => {
				if (response.status === 200) {
					_popItem()
				}
			})
		} else _popItem()
	}

	const increaseCount = async (product?: Product) => {
		const _increaseCount = (item?: BagItem) => {
			if (item) {
				item.count += 1
				setItems([...items])
			}
		}
		if (product) {
			const item = items.find((element) => element.id === product.id)

			if (IsAuthenticated()) {
				if (item) {
					api
						.put('/customer/shopbag', {
							product_id: product?.id,
							count: item.count + 1,
						})
						.then(() => _increaseCount(item))
				}
			} else if (product) {
				const item = items.find((element) => element.id === product.id)

				if (item) {
					item.count += 1
					setItems([...items])
				}
			}
		}
	}

	const decreaseCount = async (product?: Product) => {
		const _decreaseCount = (item?: BagItem) => {
			if (item) {
				item.count -= 1
				setItems([...items])
			}
		}

		if (product) {
			const item = items.find((element) => element.id === product.id)

			if (IsAuthenticated()) {
				if (item) {
					api
						.put('/customer/shopbag', {
							product_id: product?.id,
							count: item.count - 1,
						})
						.then(() => _decreaseCount(item))
				}
			} else _decreaseCount(item)
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
				increaseCount,
				decreaseCount,
			}}
		>
			{children}
		</ShopBagContext.Provider>
	)
}
export default ShopBagContext
