import React from 'react'
import { Layout, Input, Grid, Row, Col, Button, Tooltip } from 'antd'

import {
	FiHeart,
	FiMessageSquare,
	FiSearch,
	FiShoppingBag,
	FiUser,
} from 'react-icons/fi'

const { Header, Content, Footer } = Layout

const { useBreakpoint } = Grid
const { Search } = Input

export default function (props: { children: any }) {
	const screens = useBreakpoint()

	return (
		<div style={{ flexGrow: 1 }}>
			<Layout>
				<Header style={{ userSelect: 'none' }}>
					<Row align='middle' justify='space-between' wrap={false}>
						<Col span={4}>Casa Das Flores</Col>
						<Col span={8}>
							<Row align='middle' gutter={[10, 10]}>
								<Search
									placeholder='Procurando alguma coisa?'
									allowClear
									enterButton='Search'
								/>
							</Row>
						</Col>
						<Col span={6}>
							<Row justify='center' gutter={[10, 10]}>
								<Col>
									<Tooltip title='Suporte'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiMessageSquare size={24} />}
											size={'large'}
										/>
									</Tooltip>
								</Col>
								<Col>
									<Tooltip title='Lista de desejos'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiHeart size={24} />}
											size={'large'}
										/>
									</Tooltip>
								</Col>
								<Col>
									<Tooltip title='Saco de compras'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiShoppingBag size={24} />}
											size={'large'}
										/>
									</Tooltip>
								</Col>
								<Col>
									<Tooltip title='Conta'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiUser size={24} />}
											size={'large'}
										/>
									</Tooltip>
								</Col>
							</Row>
						</Col>
					</Row>
				</Header>
				<Content>{props.children}</Content>
				<Footer>casa das flores - 2020</Footer>
			</Layout>
		</div>
	)
}
