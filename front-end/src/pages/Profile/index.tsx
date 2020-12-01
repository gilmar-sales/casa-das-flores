import {
	Card,
	Col,
	Menu,
	Row,
	Typography,
	Avatar,
	Descriptions,
	Divider,
} from 'antd'
import React, { useEffect, useState } from 'react'
import api from '../../middlewares/api'
import { getToken } from '../../middlewares/auth'

interface IProfile {
	id: number
	firstName: string
	lastName: string
	profilePicture: string
	email: string
	phone: string
}

export default function Profile() {
	const [profile, setProfile] = useState({} as IProfile)
	document.title = 'Casa das Flores - Profile'
	useEffect(() => {
		api.get('/customers/profile').then((response) => {
			setProfile(response.data)
		})
	}, [])

	return (
		<Row justify={'space-around'}>
			<Col md={6} xs={24}>
				<Menu defaultSelectedKeys={['1']} mode='inline'>
					<Menu.Item key='1'>Meus Dados</Menu.Item>
					<Menu.Item key='2'>Meus Pedidos</Menu.Item>
				</Menu>
			</Col>
			<Col md={17}>
				<Card>
					<Row>
						<Col md={6}>
							<Avatar size={62} src={profile.profilePicture} />
							<Typography>
								{profile.firstName} {profile.lastName}
							</Typography>
						</Col>

						<Col md={18}>
							<Descriptions column={2}>
								<Descriptions.Item label='Telefone'>
									{profile.phone}
								</Descriptions.Item>
								<Descriptions.Item label='Cidade'>
									São Luís de Montes Belos
								</Descriptions.Item>
								<Descriptions.Item label='Endereço'>
									Rua Biriri, Jardim Disney Lândia, S/N, Qd. 6 Lt. 6
								</Descriptions.Item>
							</Descriptions>
						</Col>
						<Divider />
						<Col md={24}>
							<Row>
								<Col sm={2} />
								<Col sm={4} style={{ textAlign: 'center' }}>
									<Typography.Title level={3}>0</Typography.Title>
									Total de Pedidos
								</Col>
								<Col sm={4} style={{ textAlign: 'center' }}>
									<Typography.Title level={3}>0</Typography.Title>
									Pagamentos Pendentes
								</Col>
								<Col sm={4} style={{ textAlign: 'center' }}>
									<Typography.Title level={3}>0</Typography.Title>
									Envios Pendentes
								</Col>
								<Col sm={4} style={{ textAlign: 'center' }}>
									<Typography.Title level={3}>0</Typography.Title>
									Aguardando Entrega
								</Col>
								<Col sm={4} style={{ textAlign: 'center' }}>
									<Typography.Title level={3}>0</Typography.Title>
									Avaliações Pendentes
								</Col>
							</Row>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	)
}
