import React from 'react'
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardActions,
	Tooltip,
} from '@material-ui/core'
import { FiHeart, FiShare2, FiArrowRight, FiPlus } from 'react-icons/fi'

import useStyles from './styles'

interface IProduct {
	id: number
	title: string
	price: number
	image: string
	category: number
}

interface IProps {
	product: IProduct
}

const Product: React.FC<IProps> = ({ product }) => {
	const styles = useStyles()

	return (
		<Card className={styles.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={styles.avatar}>
						{product.category}
					</Avatar>
				}
				action={
					<Tooltip title='Visualizar'>
						<IconButton>
							<FiArrowRight />
						</IconButton>
					</Tooltip>
				}
				title={product.title}
				subheader={'R$' + product.price}
			/>
			<CardMedia
				className={styles.media}
				image={`${process.env.PUBLIC_URL + product.image}`}
				title={product.title}
			/>
			<CardActions disableSpacing>
				<Tooltip title='Adicionar aos favoritos'>
					<IconButton aria-label='add to favorites'>
						<FiHeart />
					</IconButton>
				</Tooltip>
				<Tooltip title='Compartilhar'>
					<IconButton aria-label='share'>
						<FiShare2 />
					</IconButton>
				</Tooltip>
				<Tooltip title='Adicionar a cesta'>
					<IconButton className={styles.addToBag}>
						<FiPlus />
					</IconButton>
				</Tooltip>
			</CardActions>
		</Card>
	)
}

export default Product
