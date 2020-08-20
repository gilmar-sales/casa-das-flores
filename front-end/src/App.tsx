import React from 'react'

import Routes from './Routes'

import HeaderMenu from './components/HeaderMenu'
import theme from './global'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

export default function () {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<HeaderMenu></HeaderMenu>
				<Routes />
			</ThemeProvider>
		</div>
	)
}
