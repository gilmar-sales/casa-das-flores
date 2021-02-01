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

import Dashboard from './components/Dashboard'
import Overview from './pages/admin/Overview'
import Customers from './pages/admin/Customers'
import Sales from './pages/admin/Sales'
import Orders from './pages/admin/Orders'
import Announcements from './pages/admin/Announcements'
import Products from './pages/admin/Products'

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
				<Route
					path='/'
					exact
					component={(props: any) => (
						<Redirect
							to={{ pathname: '/store', state: { from: props.location } }}
						/>
					)}
				/>
				<Route
					path='/dashboard'
					component={({ match }: { match: any }) => (
						<Dashboard>
							<ProtectedRoute path={match.path} exact component={Overview} />
							<ProtectedRoute
								path={match.path + '/customers'}
								component={Customers}
							/>
							<ProtectedRoute path={`${match.path}/sales`} component={Sales} />
							<ProtectedRoute
								path={`${match.path}/orders`}
								component={Orders}
							/>
							<ProtectedRoute
								path={`${match.path}/products`}
								component={Products}
							/>
							<ProtectedRoute
								path={`${match.path}/announcements`}
								component={Announcements}
							/>
						</Dashboard>
					)}
				/>
				<Route
					path='/store'
					component={({ match }: { match: any }) => (
						<NavBar>
							<Switch>
								<Route
									path={`${match.path}/product/:slug`}
									component={ProductOverview}
								/>
								<Route path={match.path} exact component={Home} />
								<Route component={NotFound} />
							</Switch>
						</NavBar>
					)}
				/>
				<Route
					path='/profile'
					component={({ match }: { match: any }) => (
						<NavBar>
							<Switch>
								<ProtectedRoute path={match.path} component={Profile} />
								<Route component={NotFound} />
							</Switch>
						</NavBar>
					)}
				/>
			</Switch>
		</BrowserRouter>
	)
}
