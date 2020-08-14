import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

export default function () {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
