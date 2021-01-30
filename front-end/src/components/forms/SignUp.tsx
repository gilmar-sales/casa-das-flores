import React, { useState } from 'react'
import { HiUserAdd } from 'react-icons/hi'
import { AiOutlineLoading } from 'react-icons/ai'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import api from '../../middlewares/api'
import { Link } from 'react-router-dom'

export default function SignIn() {
	const initialValues = {
		first_name: '',
		last_name: '',
		email: '',
		cpf: '',
		password: '',
		confirm_password: '',
		allow_sponsors: false,
	}

	const validationSchema = object({
		first_name: string()
			.min(3, 'O nome precisa ter no mínimo 3 carateres')
			.max(32, 'O nome pode ter no máximo 32 caracteres')
			.required('Campo obrigatório'),
		last_name: string()
			.min(3, 'O sobrenome precisa ter no mínimo 3 carateres')
			.max(32, 'O sobrenome pode ter no máximo 32 caracteres')
			.required('Campo obrigatório'),
		email: string().email('Email inválido').required('Campo obrigatório'),
		cpf: string().matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'CPF inválido'),
		password: string()
			.min(8, 'A senha precisa ter no mínimo 8 caracteres')
			.required('Campo obrigatório'),
		confirm_password: string()
			.test('passwords-match', 'Senhas não correspondem', function (value) {
				return this.parent.password === value
			})
			.required('Campo obrigatório'),
	})

	const [loading, setLoading] = useState(false)

	return (
		<div>
			<div className='flex flex-col items-center'>
				<HiUserAdd className='h-16 w-16 stroke-current text-green-600' />
				<h1 className='text-center text-3xl font-extrabold text-gray-900'>
					Forneça seus dados
				</h1>
				<p className='mt-2 text-center text-sm text-gray-600'>
					{'Ou '}
					<Link
						to=''
						className='font-medium text-green-600 hover:text-green-500'
					>
						inscreva-se com o google
					</Link>
				</p>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					setLoading(true)
					api
						.post('/customers', values)
						.then((response) => {
							setLoading(false)
							if (response.data.errors) {
								actions.setErrors(response.data.errors)
							} else window.location.href = '/'
						})
						.catch((error) => {
							console.log(error)
						})
				}}
			>
				{({ values, errors, touched }) => (
					<Form className='mt-8 space-y-6' action='#' method='POST'>
						<div className='grid grid-cols-6 gap-x-6'>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									Nome
								</label>

								<Field
									name='first_name'
									type='text'
									autoComplete='first_name'
									required
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.first_name && touched.first_name
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div
									className={
										errors.first_name && touched.first_name ? '' : ' pb-5'
									}
								>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='first_name'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									Sobrenome
								</label>

								<Field
									name='last_name'
									type='text'
									autoComplete='last_name'
									required
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.last_name && touched.last_name
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div
									className={
										errors.last_name && touched.last_name ? '' : ' pb-5'
									}
								>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='last_name'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									Endereço de e-mail
								</label>

								<Field
									name='email'
									type='text'
									autoComplete='email'
									required
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.email && touched.email
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div className={errors.email && touched.email ? '' : ' pb-5'}>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='email'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									CPF
								</label>

								<Field
									name='cpf'
									type='text'
									autoComplete='cpf'
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.cpf && touched.cpf
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div className={errors.cpf && touched.cpf ? '' : ' pb-5'}>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='cpf'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									Senha
								</label>

								<Field
									name='password'
									type='password'
									autoComplete='password'
									required
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.password && touched.password
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div
									className={errors.password && touched.password ? '' : ' pb-5'}
								>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='password'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6 sm:col-span-3'>
								<label className='block text-sm font-medium text-gray-700'>
									Confirme a senha
								</label>

								<Field
									name='confirm_password'
									type='password'
									autoComplete='confirm_password'
									required
									className={
										'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.confirm_password && touched.confirm_password
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
								/>
								<div
									className={
										errors.confirm_password && touched.confirm_password
											? ''
											: ' pb-5'
									}
								>
									<ErrorMessage
										className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
										name='confirm_password'
										component='span'
									/>
								</div>
							</div>
							<div className='col-span-6'>
								<div className='flex items-center'>
									<Field
										name='allow_sponsors'
										type='checkbox'
										className='h-5 w-5 rounded text-green-600 border-green-400 focus:ring-green-600'
									/>
									<label
										htmlFor='allow_sponsors'
										className='ml-2 block text-sm text-gray-900'
									>
										Quero receber promoções de marketing e atualizações por
										e-mail.
									</label>
								</div>
							</div>
							<div className='col-span-6 mt-6'>
								<button
									type='submit'
									className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
										{loading ? (
											<AiOutlineLoading className='animate-spin' />
										) : (
											<HiUserAdd />
										)}
									</span>
									Entrar
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
