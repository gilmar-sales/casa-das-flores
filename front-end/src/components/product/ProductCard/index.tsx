import React from 'react'
import { Button, Card, Skeleton, Tooltip, Typography } from 'antd'

import {
	ArrowRightOutlined,
	HeartOutlined,
	PlusOutlined,
} from '@ant-design/icons'

interface ICategory {
	id: number
	name: string
	description: string
	picture: string
}

interface IPicture {
	path: string
}

export interface Product {
	id: number
	name: string
	description: string
	unitPrice: number
	width: number
	height: number
	depth: number
	createdDate: string
	pictures: Array<IPicture>
	category: ICategory
}

interface IProps {
	product: Product
	loading?: boolean
}

const { Title } = Typography

const ProductCard: React.FC<IProps> = ({ product }, loading = false) => {
	return (
		<Card
			title={
				false ? (
					<Skeleton paragraph={{ rows: 0 }} />
				) : (
					<Title level={4}>{product.name}</Title>
				)
			}
			size={'small'}
			cover={<img alt='example' src='images/products/buque.jpg' />}
			actions={[
				<Tooltip title='Adicionar à lista de desejos'>
					<Button shape='circle' size={'large'} icon={<HeartOutlined />} />
				</Tooltip>,
				<Tooltip title='Adicionar à cesta'>
					<Button shape='circle' size={'large'} icon={<PlusOutlined />} />
				</Tooltip>,
				<Tooltip title='Visualizar'>
					<Button shape='circle' icon={<ArrowRightOutlined />} size={'large'} />
				</Tooltip>,
			]}
		>
			{product.description}
		</Card>
	)
}

export default ProductCard
