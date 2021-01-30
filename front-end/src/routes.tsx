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
import ProductOverview from './pages/ProductOverview'
import NotFound from './pages/NotFound'

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
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/product/:slug' component={ProductOverview} />

						<ProtectedRoute path='/profile' component={Profile} />

						<Route component={NotFound} />
					</Switch>
				</NavBar>
			</Switch>
		</BrowserRouter>
	)
}
