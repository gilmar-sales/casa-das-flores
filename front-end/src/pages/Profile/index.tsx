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
import React from 'react'

export default function Profile() {
	document.title = 'Casa das Flores - Profile'

	return (
		<div style={{ flexGrow: 1 }}>
			<Row gutter={[16, 16]} style={{ padding: 16 }}>
				<Col md={6} xs={24}>
					<Menu defaultSelectedKeys={['1']} mode='inline'>
						<Menu.Item key='1'>Meus Dados</Menu.Item>
						<Menu.Item key='2'>Meus Pedidos</Menu.Item>
					</Menu>
				</Col>
				<Col md={18}>
					<Card>
						<Row>
							<Col md={6}>
								<Avatar size={62} />
								<Typography>Gilmar Custodio de Sales</Typography>
							</Col>

							<Col md={18}>
								<Descriptions>
									<Descriptions.Item label='Telefone'>
										(xx) 1000-0000
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
		</div>
	)
}
