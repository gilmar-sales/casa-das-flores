import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Product } from '../../@types/interfaces'
import ProductDetail from '../../components/ProductDetail'
import api from '../../middlewares/api'

interface OverviewParams {
	slug: string
}

export default function ProductOverview() {
	const [product, setProduct] = useState<Product>()
	const { slug } = useParams<OverviewParams>()
	const history = useHistory()

	useEffect(() => {
		api
			.get(`/product/${slug}`)
			.then((response) => {
				setProduct(response.data)
			})
			.catch((error) => {
				if (error.response.status === 404) history.push('/')
			})
	})

	return (
		<>
			<ProductDetail product={product} />
		</>
	)
}
