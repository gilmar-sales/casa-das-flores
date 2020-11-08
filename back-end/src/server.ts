import app from './app'
import { createConnection, getConnectionOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

getConnectionOptions().then((connectionOptions) => {
	return createConnection(
		Object.assign(connectionOptions, {
			namingStrategy: new SnakeNamingStrategy(),
		})
	)
})

app.listen(3333, () => {
	console.log(`Server running on http://localhost:3333`)
})
