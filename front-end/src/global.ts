import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
	palette: {
		primary: {
			main: green[600],
		},
		secondary: {
			main: red[600],
		},
	},
})
