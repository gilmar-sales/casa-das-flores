import React from 'react'
import {
	Avatar,
	Button,
	Checkbox,
	CssBaseline,
	TextField,
	FormControlLabel,
	Link,
	Grid,
	Box,
	Container,
} from '@material-ui/core'

import { FiUser } from 'react-icons/fi'

import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'

import useStyles from './styles'

import api from '../../middlewares/api'
import { login } from '../../middlewares/auth'
import Copyright from '../../components/Copyright'

const SignIn = () => {
	const classes = useStyles()

	const initialValues = {
		email: '',
		password: '',
		remember: false,
	}
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FiUser />
				</Avatar>
				<Formik
					validationSchema={object({
						email: string()
							.email('Email inválido')
							.required('Campo obrigatório'),
						password: string()
							.min(8, 'A senha precisa ter no mínimo 8 caracteres')
							.required('Campo obrigatório'),
					})}
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						api.post('/users/profile/auth', values).then((response) => {
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
						<Form noValidate>
							<Field
								as={TextField}
								variant='outlined'
								margin='normal'
								required
								fullWidth
								label='Endereço de email'
								name='email'
								autoComplete='email'
								autoFocus
								helperText={touched.email ? errors.email : null}
								error={touched.email && errors.email != null}
							/>
							<Field
								as={TextField}
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Senha'
								type='password'
								helperText={touched.password ? errors.password : null}
								error={touched.password && errors.password != null}
							/>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Lembrar senha'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Entrar
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href='/' variant='body2'>
										Esqueceu a senha?
									</Link>
								</Grid>
								<Grid item>
									<Link href='/sign-up' variant='body2'>
										{'Não possui uma conta? inscreva-se'}
									</Link>
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	)
}

export default SignIn
