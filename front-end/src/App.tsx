import React from 'react'
import Routes from './routes'

import { SignProvider } from './contexts/SignContext'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App '>
			<SignProvider>
				<Routes />
			</SignProvider>
			<Footer />
		</div>
	)
}

export default App
