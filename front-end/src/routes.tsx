import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	RouteProps,
	Redirect,
} from 'react-router-dom'

import Home from './pages/Home'

import { isAuthenticated } from './middlewares/auth'

import NavBarProvider from './components/NavBarProvider'

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
				<NavBarProvider>
					<Route path='/' exact component={Home} />
				</NavBarProvider>
			</Switch>
		</BrowserRouter>
	)
}
