import React from 'react'
import Routes from './routes'

import { SignProvider } from './contexts/SignContext'
import Footer from './components/molecules/Footer'
import { ShopBagProvider } from './contexts/ShopBagContext'

function App() {
	return (
		<div className='App '>
			<SignProvider>
				<ShopBagProvider>
					<Routes />
				</ShopBagProvider>
			</SignProvider>
			<Footer />
		</div>
	)
}

export default App
