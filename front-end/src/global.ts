import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
	typography: {
		fontFamily: ['Montserrat'].join(','),
	},
	palette: {
		primary: {
			main: green[600],
		},
		secondary: {
			main: red[600],
		},
	},
})
