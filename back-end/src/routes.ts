import { Router } from 'express'

import CustomerController from './controllers/customerController'
import ProfileController from './controllers/profileController'

const routes = Router()

routes.get('/', (req, res) => {
	return res.send('Hello World')
})

routes.post('/customers', CustomerController.create)
routes.get('/customers', CustomerController.read)
routes.put('/customers/:id', CustomerController.update)
routes.delete('/customers/:id', CustomerController.delete)

routes.post('/customers/profile/auth', ProfileController.authenticate)
routes.get('/customers/profile/:id', ProfileController.read)

export default routes
