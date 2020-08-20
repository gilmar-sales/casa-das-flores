import React from 'react'

import Routes from './routes'

import theme from './global'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

export default function () {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes />
			</ThemeProvider>
		</div>
	)
}
