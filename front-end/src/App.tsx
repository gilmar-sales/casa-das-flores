import React from 'react'
import Routes from './routes'

import { SignProvider } from './contexts/SignContext'

function App() {
	return (
		<div className='App '>
			<SignProvider>
				<Routes />
			</SignProvider>
		</div>
	)
}

export default App
