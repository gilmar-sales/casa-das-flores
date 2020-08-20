import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { FiUserPlus } from 'react-icons/fi'

import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'

import api from '../../middlewares/api'

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

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
