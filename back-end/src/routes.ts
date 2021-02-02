import { Router } from 'express'

import CustomerController from './controllers/customerController'
import ProfileController from './controllers/profileController'
import ShopBagController from './controllers/shopBagController'
import ProductController from './controllers/productController'
import CategoryController from './controllers/categoryController'

import authMiddleware from './middlewares/authMiddleware'

const routes = Router()

routes.get('/', (req, res) => {
	return res.send('Hello World')
})

routes.post('/customers', CustomerController.create)
routes.get('/customers', authMiddleware, CustomerController.read)
routes.put('/customers', authMiddleware, CustomerController.update)
routes.delete('/customers/:id', authMiddleware, CustomerController.delete)

routes.post('/customers/profile/auth', ProfileController.authenticate)
routes.get('/customers/profile', authMiddleware, ProfileController.read)

routes.post('/customer/shopbag', authMiddleware, ShopBagController.create)
routes.get('/customer/shopbag', authMiddleware, ShopBagController.read)
routes.delete('/customer/shopbag', authMiddleware, ShopBagController.delete)

routes.post('/products', ProductController.create)
routes.get('/products/:page', ProductController.read)
routes.get('/product/:slug', ProductController.view)

routes.post('/categories', authMiddleware, CategoryController.create)
routes.get('/categories', CategoryController.read)

export default routes
