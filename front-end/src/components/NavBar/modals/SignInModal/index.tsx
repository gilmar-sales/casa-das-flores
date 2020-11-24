import React, { useContext, useState } from 'react'
import {
	Button,
	Modal,
	message,
	Form,
	Input,
	Checkbox,
	Typography,
	Row,
	Col,
} from 'antd'

import NavBarContext from '../../../../contexts/NavBarContext'

import api from '../../../../middlewares/api'
import { login } from '../../../../middlewares/auth'

export default function SignInModal() {
	const [form] = Form.useForm()
	const ctx = useContext(NavBarContext)
	const [isSubmitLoading, setSubmitLoading] = useState(false)

	const onFinish = (values: any) => {
		setSubmitLoading(true)
		api.post('/customers/profile/auth', values).then((response) => {
			setSubmitLoading(false)
			if (response.data.errors) {
				form.setFields(response.data.errors)
			} else {
				login(response.data)
				ctx.setModalValue('sign-in-success')
				message.success({
					content: 'Entrou com sucesso!',
					style: {
						marginTop: '10vh',
					},
				})
				form.resetFields()
			}
		})
	}

	return (
		<Modal
			visible={ctx.isAccountModalVisible && ctx.modalValue === 'sign-in'}
			title={'Entrar'}
			onCancel={() => ctx.setAccountModalVisible(false)}
			footer={null}
		>
			<Form
				name='sign-in'
				form={form}
				onFinish={onFinish}
				initialValues={{ remember: true }}
				size={'large'}
			>
				<Form.Item
					label='E-mail'
					name='email'
					rules={[
						{ required: true, message: 'Por favor entre com seu e-mail!' },
						{
							type: 'email',
							message: 'E-mail inválido',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Senha'
					name='password'
					rules={[
						{ required: true, message: 'Por favor entre com sua senha!' },
						{ min: 8, message: 'A senha precisa ter no mínimo 8 caracteres' },
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Lembrar senha</Checkbox>
				</Form.Item>
				<Row justify={'space-between'} key={'asd'}>
					<Col key={'1'}>
						<Typography>
							<Typography.Link onClick={() => ctx.setModalValue('sign-up')}>
								{'Esqueceu a senha?'}
							</Typography.Link>
						</Typography>
					</Col>
					<Col key={'2'}>
						<Typography>
							Não possui uma conta?
							<Typography.Link onClick={() => ctx.setModalValue('sign-up')}>
								{' Inscreva-se'}
							</Typography.Link>
						</Typography>
					</Col>
				</Row>
				<Row justify={'end'}>
					<Col>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								loading={isSubmitLoading}
							>
								Entrar
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Modal>
	)
}
