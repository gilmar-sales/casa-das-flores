import express, { Application } from 'express'
import cors from 'cors'
import path from 'path'

import routes from './routes'

class App {
	public express: Application

	constructor() {
		this.express = express()

		this.middlewares()
		this.routes()
		this.ui()
	}

	private middlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}

	private routes() {
		this.express.use('/api', routes)
	}
	private ui() {
		this.express.use(
			express.static(path.resolve(__dirname, '../../front-end/build'))
		)
		this.express.use('*', (request, response) => {
			response.sendFile(
				path.resolve(__dirname, '../../front-end/build', 'index.html')
			)
		})
	}
}

export default new App().express
