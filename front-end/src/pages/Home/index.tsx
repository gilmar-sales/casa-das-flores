import React from 'react'
import { Carousel, Pagination, Row } from 'antd'

const contentStyle = {
	height: '200px',
	color: '#fff',
	background: 'black',
}

export default function () {
	return (
		<div style={{ flexGrow: 1 }}>
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

			<Row justify='center'>
				<Pagination
					defaultCurrent={1}
					total={1}
					pageSize={1}
					showSizeChanger={false}
				/>
			</Row>
			<Row>No products!</Row>
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
