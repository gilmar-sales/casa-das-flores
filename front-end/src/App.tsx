import React from 'react'

import Routes from './Routes'

import HeaderMenu from './components/HeaderMenu'
import theme from './global'
import { ThemeProvider } from '@material-ui/core'

export default function () {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<HeaderMenu></HeaderMenu>
				<Routes />
			</ThemeProvider>
		</div>
	)
}
