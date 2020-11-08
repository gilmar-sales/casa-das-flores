import { Router } from 'express'

import CustomerController from './controllers/customerController'
import ProfileController from './controllers/profileController'
import ProductController from './controllers/productController'
import CategoryController from './controllers/categoryController'

import authMiddleware from './middlewares/authMiddleware'

const routes = Router()

routes.get('/', (req, res) => {
	return res.send('Hello World')
})

routes.post('/customers', CustomerController.create)
routes.get('/customers', CustomerController.read)
routes.put('/customers/:id', CustomerController.update)
routes.delete('/customers/:id', CustomerController.delete)

routes.post('/customers/profile/auth', ProfileController.authenticate)
routes.get('/customers/profile', authMiddleware, ProfileController.read)

routes.post('/products', ProductController.create)
routes.get('/products/:page', ProductController.read)

routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.read)

export default routes
