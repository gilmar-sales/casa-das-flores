import React from 'react'
import 'antd/dist/antd.less'
import Routes from './routes'

import { NavBarProvider } from './contexts/NavBarContext'

export default function App() {
	return (
		<div style={{ maxWidth: '100vw' }}>
			<NavBarProvider>
				<Routes />
			</NavBarProvider>
		</div>
	)
}
