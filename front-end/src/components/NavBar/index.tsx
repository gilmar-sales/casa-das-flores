import React, { useContext } from 'react'
import {
	Layout,
	Input,
	Grid,
	Row,
	Col,
	Button,
	Tooltip,
	Menu,
	Dropdown,
} from 'antd'

import {
	FiHeart,
	FiMessageSquare,
	FiSearch,
	FiShoppingBag,
	FiUser,
} from 'react-icons/fi'

import NavBarContext from '../../contexts/NavBarContext'

import SignInModal from './modals/SignInModal'
import SignUpModal from './modals/SignUpModal'

const { Header, Content, Footer } = Layout

const { useBreakpoint } = Grid
const { Search } = Input

export default function (props: { children: any }) {
	const screens = useBreakpoint()
	const ctx = useContext(NavBarContext)

	const accountMenu = (
		<Menu>
			<Menu.Item
				key='1'
				onClick={() => {
					ctx.setAccountModalVisible(true)
					ctx.setModalValue('sign-in')
				}}
			>
				Entrar
			</Menu.Item>
			<Menu.Item
				key='2'
				onClick={() => {
					ctx.setAccountModalVisible(true)
					ctx.setModalValue('sign-up')
				}}
			>
				Inscrever-se
			</Menu.Item>

			{ctx.modalValue === 'sign-in' ? <SignInModal /> : <SignUpModal />}
		</Menu>
	)

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
									enterButton={<FiSearch size={20} />}
								/>
							</Row>
						</Col>
						<Col span={6}>
							<Row justify='center' gutter={[10, 10]}>
								<Col>
									<Tooltip placement='left' title='Suporte'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiMessageSquare size={24} />}
											size={'large'}
											onClick={() => console.log(screens)}
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
									<Tooltip title='Cesta de compras'>
										<Button
											type='primary'
											shape='circle'
											icon={<FiShoppingBag size={24} />}
											size={'large'}
										/>
									</Tooltip>
								</Col>
								<Col>
									<Tooltip placement='right' title='Conta'>
										<Dropdown overlay={accountMenu} trigger={['click']}>
											<Button
												type='primary'
												shape='circle'
												icon={<FiUser size={24} />}
												size={'large'}
											/>
										</Dropdown>
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
