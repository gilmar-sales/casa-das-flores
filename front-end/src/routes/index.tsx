import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export default function () {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/sign-in' exact component={SignIn} />
				<Route path='/sign-up' exact component={SignUp} />
			</Switch>
		</BrowserRouter>
	)
}
