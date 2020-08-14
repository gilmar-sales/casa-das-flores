import React from 'react'

import Routes from './Routes'

import theme from './global'
import { ThemeProvider } from '@material-ui/core'

export default function () {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</div>
	)
}
