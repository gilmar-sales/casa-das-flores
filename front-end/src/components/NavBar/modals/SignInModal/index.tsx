import React, { useContext } from 'react'
import { Button, Modal, Form, Input, Checkbox } from 'antd'

import NavBarContext from '../../../../contexts/NavBarContext'
import { FiX } from 'react-icons/fi'

export default function () {
	const ctx = useContext(NavBarContext)
	return (
		<Form name='basic' initialValues={{ remember: true }} size={'large'}>
			<Modal
				visible={ctx.isAccountModalVisible}
				closeIcon={<FiX />}
				title={'Entrar'}
				onCancel={() => ctx.setAccountModalVisible(false)}
				footer={[
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Entrar
						</Button>
					</Form.Item>,
				]}
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item style={{ marginBottom: 0 }} name='remember'>
					<Checkbox>Lembrar de mim</Checkbox>
				</Form.Item>
			</Modal>
		</Form>
	)
}
