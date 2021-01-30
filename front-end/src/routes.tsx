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

const ProtectedRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
	const routeComponent = (props: any) =>
		!isAuthenticated() ? (
			<Redirect to={{ pathname: '/', state: { from: props.location } }} />
		) : (
			React.createElement(component as React.FunctionComponent, props)
		)

	return <Route {...rest} render={routeComponent} />
}

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<ProtectedRoute path='/dashboard' component={NotFound}></ProtectedRoute>
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
