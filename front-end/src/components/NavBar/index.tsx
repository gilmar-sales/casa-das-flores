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
	message,
	Avatar,
} from 'antd'
import {
	ShoppingOutlined,
	HeartOutlined,
	MessageOutlined,
	SearchOutlined,
	UserOutlined,
} from '@ant-design/icons'
import NavBarContext from '../../contexts/NavBarContext'

import {
	isAuthenticated,
	logout,
	NAME_KEY,
	LAST_NAME_KEY,
	PROFILE_PICTURE_KEY,
} from '../../middlewares/auth'

import SignInModal from './modals/SignInModal'
import SignUpModal from './modals/SignUpModal'
import LogoIcon from '../../icons/Logo'
import { stringify } from 'querystring'

const { Header, Content, Footer } = Layout
const { useBreakpoint } = Grid
const { Search } = Input

export default function (props: { children: any }) {
	const screens = useBreakpoint()
	const ctx = useContext(NavBarContext)
	const search = React.createRef<Input>()
	const mobileSearch = React.createRef<Input>()

	const accountMenu = isAuthenticated() ? (
		<Menu>
			<Menu.Item key='1'>Perfil</Menu.Item>
			<Menu.Item
				key='2'
				onClick={() => {
					logout()
					message.success({
						content: 'Saiu com sucesso!',
						style: {
							marginTop: '10vh',
						},
					})
					ctx.setAccountModalVisible(true)
					ctx.setModalValue('sign-out-success')
				}}
			>
				Sair
			</Menu.Item>
		</Menu>
	) : (
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
		</Menu>
	)

	return (
		<Layout>
			<Header style={{ height: '100%', padding: '0px 8px' }}>
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
								enterButton={<SearchOutlined style={{ fontSize: 24 }} />}
								ref={search}
								onChange={(event) =>
									mobileSearch.current?.setValue(event.target.value)
								}
							/>
						</Row>
					</Col>

					<Col>
						<Row wrap={false} gutter={[10, 0]}>
							<Col>
								<Tooltip placement='left' title='Suporte'>
									<Button
										type='primary'
										shape='circle'
										icon={<MessageOutlined style={{ fontSize: 24 }} />}
										size={'large'}
									/>
								</Tooltip>
							</Col>
							<Col>
								<Tooltip title='Lista de desejos'>
									<Button
										type='primary'
										shape='circle'
										icon={<HeartOutlined style={{ fontSize: 24 }} />}
										size={'large'}
									/>
								</Tooltip>
							</Col>
							<Col>
								<Tooltip title='Cesta de compras'>
									<Button
										type='primary'
										shape='circle'
										icon={<ShoppingOutlined style={{ fontSize: 24 }} />}
										size={'large'}
									/>
								</Tooltip>
							</Col>
							<Col>
								<Tooltip placement='right' title='Conta'>
									<Dropdown overlay={accountMenu} trigger={['click']}>
										{isAuthenticated() ? (
											localStorage.getItem(PROFILE_PICTURE_KEY) === null ? (
												<Avatar
													src={localStorage.getItem(PROFILE_PICTURE_KEY)}
													size={40}
													style={{ cursor: 'pointer', marginTop: -5 }}
												></Avatar>
											) : (
												<Avatar
													size={40}
													style={{
														backgroundColor: '#13AE7A',
														cursor: 'pointer',
														marginTop: -5,
													}}
												>
													{localStorage
														.getItem(NAME_KEY)
														?.charAt(0)
														.toUpperCase()}
													{localStorage
														.getItem(LAST_NAME_KEY)
														?.charAt(0)
														.toUpperCase()}
												</Avatar>
											)
										) : (
											<Button
												type='primary'
												shape='circle'
												icon={<UserOutlined style={{ fontSize: 24 }} />}
												size={'large'}
											/>
										)}
									</Dropdown>
								</Tooltip>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row
					align='middle'
					justify='center'
					wrap={false}
					style={{ flexGrow: 1 }}
					gutter={[10, 10]}
				>
					<Col xs={20} sm={0}>
						<Row align='middle'>
							<Search
								placeholder='Procurando alguma coisa?'
								allowClear
								ref={mobileSearch}
								enterButton={<SearchOutlined style={{ fontSize: 24 }} />}
								size='large'
								onChange={(event) =>
									search.current?.setValue(event.target.value)
								}
							/>
						</Row>
					</Col>
				</Row>
			</Header>
			<Content>{props.children}</Content>
			<Footer>casa das flores - 2020</Footer>
			<SignInModal /> <SignUpModal />
		</Layout>
	)
}
