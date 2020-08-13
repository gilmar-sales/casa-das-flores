import { Router } from 'express'

import UserController from './controllers/usersController'
import ProfileController from './controllers/profileController'

const routes = Router();

routes.get('/', (req, res) => {
   return res.send('Hello World') 
})

routes.post('/users', UserController.create)
routes.get('/users', UserController.read)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.post('/users/profile/auth', ProfileController.authenticate)
routes.get('/users/profile/:id', ProfileController.read)

export default routes;