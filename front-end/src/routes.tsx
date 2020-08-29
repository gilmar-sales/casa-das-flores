import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	RouteProps,
	Redirect,
} from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import { isAuthenticated } from './middlewares/auth'

const ProtectedRoute: React.FC<RouteProps> = (props) => {
	if (!isAuthenticated()) {
		return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
	} else {
		return <Route {...props} />
	}
}

export default function () {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/sign-in' component={SignIn} />
				<Route path='/sign-up' component={SignUp} />
				<ProtectedRoute path='/profile' component={SignIn} />
			</Switch>
		</BrowserRouter>
	)
}
