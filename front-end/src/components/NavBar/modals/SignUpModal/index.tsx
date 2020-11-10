import React, { useContext, useState } from 'react'

import { Button, Modal, Form, Input, Checkbox, Row, Col, message } from 'antd'
import { FiX } from 'react-icons/fi'

import * as Formik from 'formik'
import { object, string } from 'yup'

import api from '../../../../middlewares/api'

import NavBarContext from '../../../../contexts/NavBarContext'
import ReactInputMask from 'react-input-mask'
import { login } from '../../../../middlewares/auth'

export default function () {
	const [form] = Form.useForm()
	const ctx = useContext(NavBarContext)
	const [isSubmitLoading, setSubmitLoading] = useState(false)

	const calcChecker1 = (firstNineDigits: string) => {
		let sum = 0
		for (let j = 0; j < 9; ++j) {
			sum += +firstNineDigits[j] * (10 - j)
		}
		let lastSumChecker1 = sum % 11
		let checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1
		return checker1
	}
	const calcChecker2 = (cpfWithChecker1: string) => {
		let sum = 0
		for (let k = 0; k < 10; ++k) {
			sum += +cpfWithChecker1[k] * (11 - k)
		}
		let lastSumChecker2 = sum % 11
		let checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
		return checker2
	}

	const onFinish = (values: any) => {
		setSubmitLoading(true)

		api.post('/customers', values).then((response) => {
			setSubmitLoading(false)
			if (response.data.errors) {
				form.setFields(response.data.errors)
			} else {
				window.location.href = '/'
			}
		})
	}

	return (
		<Form
			form={form}
			name='basic'
			initialValues={{ remember: true }}
			size={'large'}
			onFinish={onFinish}
		>
			<Modal
				visible={ctx.isAccountModalVisible}
				closeIcon={<FiX />}
				title={'Inscrever-se'}
				centered
				onCancel={() => ctx.setAccountModalVisible(false)}
				footer={null}
			>
				<Form.Item
					label='Nome'
					name='name'
					rules={[{ required: true, message: 'Por favor entre com seu nome!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Sobrenome'
					name='lastName'
					rules={[
						{ required: true, message: 'Por favor entre com seu sobrenome!' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='CPF'
					name='cpf'
					rules={[
						({ getFieldValue }) => ({
							validator(rule, value) {
								let clean = value.replace(/[^\d]/g, '')
								let firstNineDigits = clean.substring(0, 9)
								let checker = clean.substring(9, 11)

								if (clean.length === 0) {
									return Promise.resolve()
								}
								if (clean.length !== 11) {
									return Promise.reject('')
								}

								for (let i = 0; i < 10; i++) {
									if (
										'' + firstNineDigits + checker ===
										Array(12).join(`${i}`)
									) {
										return Promise.reject('CPF Inválido!')
									}
								}

								let checker1 = calcChecker1(firstNineDigits)
								let checker2 = calcChecker2('' + firstNineDigits + checker1)

								if (checker === checker1.toString() + checker2.toString()) {
									return Promise.resolve()
								}
								return Promise.reject('CPF Inválido!')
							},
						}),
					]}
				>
					<ReactInputMask mask='999.999.999-99' placeholder='___.___.___-__'>
						{(inputProps: any) => <Input {...inputProps} />}
					</ReactInputMask>
				</Form.Item>

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
					hasFeedback
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					label='Confirme a senha'
					name='confirmPassword'
					dependencies={['password']}
					rules={[
						{ required: true, message: 'Por favor confirme sua senha!' },
						({ getFieldValue }) => ({
							validator(rule, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject(
									'As senhas que você digitou não correspondem!'
								)
							},
						}),
					]}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>

				<Form.Item style={{ marginBottom: 0 }} name='remember'>
					<Checkbox>
						Quero receber promoções de marketing e atualizações por e-mail.
					</Checkbox>
				</Form.Item>

				<Row justify={'end'}>
					<Col>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								loading={isSubmitLoading}
							>
								Inscrever-se
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Modal>
		</Form>
	)
}
