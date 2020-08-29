import React from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Container,
} from '@material-ui/core'

import { FiUserPlus } from 'react-icons/fi'

import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'

import api from '../../middlewares/api'

import Copyright from '../../components/Copyright'
import useStyles from './styles'

export default function SignUp() {
	const classes = useStyles()

	const initialValues = {
		name: '',
		lastName: '',
		email: '',
		cpf: '',
		password: '',
		confirmPassword: '',
		allowSponsors: false,
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FiUserPlus />
				</Avatar>
				<Formik
					validateOnChange={true}
					validationSchema={object({
						name: string()
							.min(3, 'O nome precisa ter no mínimo 3 carateres')
							.max(32, 'O nome pode ter no máximo 32 caracteres')
							.required('Campo obrigatório'),
						lastName: string()
							.min(3, 'O sobrenome precisa ter no mínimo 3 carateres')
							.max(32, 'O sobrenome pode ter no máximo 32 caracteres')
							.required('Campo obrigatório'),
						email: string()
							.email('Email inválido')
							.required('Campo obrigatório'),
						cpf: string().matches(
							/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
							'Formato inválido'
						),
						password: string()
							.min(8, 'A senha precisa ter no mínimo 8 caracteres')
							.required('Campo obrigatório'),
						confirmPassword: string()
							.test('passwords-match', 'Senhas não correspondem', function (
								value
							) {
								return this.parent.password === value
							})
							.required('Campo obrigatório'),
					})}
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						alert(JSON.stringify(values, null, 2))

						api
							.post('/users', values)
							.then((response) => {
								if (response.data.errors) {
									alert(response.data.errors)
									actions.setErrors(response.data.errors)
								} else window.location.href = '/'
							})
							.catch((error) => {
								console.log(error)
							})
					}}
				>
					{({ values, errors, touched }) => (
						<Form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Field
										name='name'
										label='Nome'
										autoComplete='name'
										variant='outlined'
										as={TextField}
										fullWidth
										autoFocus
										required
										helperText={touched.name ? errors.name : null}
										error={touched.name && errors.name != null}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										name='lastName'
										label='Sobrenome'
										autoComplete='lname'
										variant='outlined'
										as={TextField}
										fullWidth
										required
										helperText={touched.lastName ? errors.lastName : null}
										error={touched.lastName && errors.lastName != null}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										name='email'
										label='Endereço de email'
										autoComplete='email'
										variant='outlined'
										as={TextField}
										fullWidth
										required
										helperText={touched.email ? errors.email : null}
										error={touched.email && errors.email != null}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										name='cpf'
										label='CPF'
										autoComplete='off'
										variant='outlined'
										as={TextField}
										fullWidth
										helperText={touched.cpf ? errors.cpf : null}
										error={touched.cpf && errors.cpf != null}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										name='password'
										label='Senha'
										type='password'
										autoComplete='off'
										variant='outlined'
										as={TextField}
										fullWidth
										required
										helperText={touched.password ? errors.password : null}
										error={touched.password && errors.password != null}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										name='confirmPassword'
										label='Confirme a senha'
										type='password'
										autoComplete='off'
										variant='outlined'
										as={TextField}
										fullWidth
										required
										helperText={
											touched.confirmPassword ? errors.confirmPassword : null
										}
										error={
											touched.confirmPassword && errors.confirmPassword != null
										}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										name='allowSponsors'
										control={
											<Checkbox value='allowExtraEmails' color='primary' />
										}
										label='Quero receber promoções de marketing e atualizações por e-mail.'
										as={FormControlLabel}
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Inscrever-se
							</Button>
							<Grid container justify='flex-end'>
								<Grid item>
									<Link href='/sign-in' variant='body2'>
										Já possui uma conta? Entre
									</Link>
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	)
}
