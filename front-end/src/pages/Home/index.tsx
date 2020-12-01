import React from 'react'
import { Carousel, Col, Pagination, Row } from 'antd'

import ProductCard from '../../components/product/ProductCard'

const contentStyle = {
	height: '200px',
	color: '#fff',
	background: 'black',
}

const product = {
	id: 1,
	name: 'Buquê',
	description:
		'Buquê de rosas vermelhas asd as sd as asd asdasdas as das das  sadas asd',
	unitPrice: 90,
	width: 12,
	height: 50,
	depth: 10,
	createdDate: 'string',
	pictures: [{ path: '' }],
	category: {
		id: 1,
		name: 'string',
		description: 'string',
		picture: 'string',
	},
}

export default function Home() {
	document.title = 'Casa das Flores - Home'
	return (
		<div style={{ flexGrow: 1 }}>
			<Row justify={'center'}>
				<Col xs={24} md={16} lg={12} xl={8}>
					<Carousel>
						<div>
							<h3 style={contentStyle}>1</h3>
						</div>
						<div>
							<h3 style={contentStyle}>2</h3>
						</div>
						<div>
							<h3 style={contentStyle}>3</h3>
						</div>
						<div>
							<h3 style={contentStyle}>4</h3>
						</div>
					</Carousel>
				</Col>
			</Row>

			<Row justify='center'>
				<Pagination
					defaultCurrent={1}
					total={1}
					pageSize={1}
					showSizeChanger={false}
				/>
			</Row>
			<Row
				style={{
					paddingTop: 16,
					paddingLeft: 8,
					paddingRight: 8,
					paddingBottom: 16,
					margin: 0,
					maxWidth: '100vw',
				}}
				gutter={[16, 16]}
			>
				{[...Array(12)].map((value, index) => {
					return (
						<Col
							key={index.toString()}
							xs={24}
							sm={12}
							md={6}
							lg={6}
							xl={4}
							xxl={2}
						>
							<ProductCard product={product}></ProductCard>
						</Col>
					)
				})}
			</Row>
			<Row justify='center'>
				<Pagination
					defaultCurrent={1}
					total={1}
					pageSize={1}
					showSizeChanger={false}
				/>
			</Row>
		</div>
	)
}
