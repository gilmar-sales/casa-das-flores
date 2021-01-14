import React, { useState } from 'react'
import { HiLockClosed, HiLockOpen, HiMail } from 'react-icons/hi'
import { AiOutlineLoading } from 'react-icons/ai'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import Logo from '../../icons/Logo'
import api from '../../middlewares/api'
import { login } from '../../middlewares/auth'

export default function SignIn() {
	const initialValues = { email: '', password: '', remember_me: false }
	const validationSchema = object({
		email: string().email('Email inválido').required('Campo obrigatório'),
		password: string()
			.min(8, 'A senha precisa ter no mínimo 8 caracteres')
			.required('Campo obrigatório'),
	})

	const [loading, setLoading] = useState(false)

	return (
		<div>
			<div className='flex flex-col items-center'>
				<Logo className='h-16 w-16 stroke-current text-green-600' />
				<a className='text-center text-3xl font-extrabold text-gray-900'>
					Entre com seus dados
				</a>
				<p className='mt-2 text-center text-sm text-gray-600'>
					{'Ou '}
					<a
						href='#'
						className='font-medium text-green-600 hover:text-green-500'
					>
						entre com google
					</a>
				</p>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					setLoading(true)
					api.post('/customers/profile/auth', values).then((response) => {
						setLoading(false)
						if (response.data.errors) {
							actions.setErrors(response.data.errors)
						} else {
							localStorage.setItem('id', response.data.id)
							login(response.data)
							window.location.href = '/'
						}
					})
				}}
			>
				{({ values, errors, touched }) => (
					<Form className='mt-8 space-y-6' action='#' method='POST'>
						<div className='rounded-md shadow-sm -space-y-px'>
							<div className='flex rounded-md shadow-sm'>
								<span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
									<HiMail />
								</span>
								<Field
									name='email'
									type='email'
									autoComplete='email'
									required
									className={
										'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.email && touched.email
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
									placeholder='E-mail'
								/>
							</div>
							<div className={errors.email && touched.email ? '' : ' pb-5'}>
								<ErrorMessage
									className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
									name='email'
									component='span'
								/>
							</div>
							<div className='flex'>
								<span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
									<HiLockClosed />
								</span>
								<Field
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className={
										'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none  focus:z-10 sm:text-sm' +
										(errors.password && touched.password
											? ' border-red-500 focus:ring-red-500 focus:border-red-500'
											: ' focus:ring-indigo-500 focus:border-indigo-500')
									}
									placeholder='Senha'
								/>
							</div>
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

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<Field
									id='remember_me'
									name='remember_me'
									type='checkbox'
									className='h-5 w-5 rounded text-green-600 border-green-400 focus:ring-green-600'
								/>
								<label
									htmlFor='remember_me'
									className='ml-2 block text-sm text-gray-900'
								>
									Lembrar dados
								</label>
							</div>

							<div className='text-sm'>
								<a
									href='#'
									className='font-medium text-green-600 hover:text-green-500'
								>
									Esqueceu sua senha?
								</a>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
									{loading ? (
										<AiOutlineLoading className='animate-spin' />
									) : (
										<HiLockOpen />
									)}
								</span>
								Entrar
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
