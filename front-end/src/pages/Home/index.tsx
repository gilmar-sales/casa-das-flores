import React from 'react'
import { Grid } from '@material-ui/core'

import ProductCard from '../../components/ProductCard'
import CustomCarousel from '../../components/Carousel'

export default function () {
	const products = [
		{
			id: 0,
			title: 'Buquê Especial',
			price: 2,
			image: '/images/products/buque.jpg',
			category: 1,
		},
		{
			id: 0,
			title: 'Buquê Especial',
			price: 2,
			image: '/images/products/buque.jpg',
			category: 1,
		},
		{
			id: 0,
			title: 'Buquê Especial',
			price: 2,
			image: '/images/products/buque.jpg',
			category: 1,
		},
		{
			id: 0,
			title: 'Buquê Especial',
			price: 2,
			image: '/images/products/buque.jpg',
			category: 1,
		},
	]

	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container={true}>
				<Grid item xs={1} sm={2} md={1} xl={3} />
				<Grid item xs={10} sm={8} md={10} xl={6}>
					<Grid container={true} spacing={2}>
						<Grid item xs={12}>
							<CustomCarousel />
						</Grid>

						{products.map((product) => (
							<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
								<ProductCard product={product}></ProductCard>
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={2} md={1} xl={3} />
			</Grid>
		</div>
	)
}
