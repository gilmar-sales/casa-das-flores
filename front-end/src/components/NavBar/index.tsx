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
	Typography,
} from 'antd'
import {
	FiHeart,
	FiMessageSquare,
	FiSearch,
	FiShoppingBag,
	FiUser,
} from 'react-icons/fi'
import { DownOutlined } from '@ant-design/icons'
import NavBarContext from '../../contexts/NavBarContext'

import SignInModal from './modals/SignInModal'
import SignUpModal from './modals/SignUpModal'
import LogoIcon from '../../icons/Logo'

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

	const menu = (
		<Menu>
			<Menu.Item key='1'>1st menu item</Menu.Item>
			<Menu.Item key='2'>2nd menu item</Menu.Item>
			<Menu.Item key='3'>3rd menu item</Menu.Item>
		</Menu>
	)

	return (
		<Layout>
			<Header
				style={{ userSelect: 'none', display: 'flex', alignItems: 'center' }}
			>
				<Row
					align='middle'
					justify='space-between'
					wrap={false}
					style={{ flexGrow: 1 }}
				>
					<Col xs={0} md={6}>
						<Typography.Link
							href='/'
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<LogoIcon />
							Casa Das Flores
						</Typography.Link>
					</Col>
					<Col xs={1} md={0}>
						<Typography.Link
							href='/'
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<LogoIcon />
						</Typography.Link>
					</Col>
					<Col xs={0} sm={8}>
						<Row align='middle'>
							<Search
								placeholder='Procurando alguma coisa?'
								allowClear
								enterButton={<FiSearch size={20} />}
							/>
						</Row>
					</Col>

					<Col xs={10} sm={0}>
						<Row align='middle'>
							<Dropdown overlay={menu}>
								<Button type='primary' icon={<FiSearch size={20} />}>
									{' '}
									<DownOutlined />
								</Button>
							</Dropdown>
						</Row>
					</Col>
					<Col span={6}>
						<Row justify='end' wrap={false} gutter={[10, 0]}>
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
	)
}
