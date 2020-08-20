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
import { FiUser } from 'react-icons/fi'

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
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.grey[500],
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

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
