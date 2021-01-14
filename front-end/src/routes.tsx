import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	RouteProps,
	Redirect,
} from 'react-router-dom'

import { isAuthenticated } from './middlewares/auth'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'

const ProtectedRoute: React.FC<RouteProps> = (props) => {
	if (!isAuthenticated()) {
		return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
	} else {
		return <Route {...props} />
	}
}

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<NavBar>
					<Route path='/' exact component={Home} />
					<ProtectedRoute path='/profile' component={Profile} />
				</NavBar>
			</Switch>
		</BrowserRouter>
	)
}
