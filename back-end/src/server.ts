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

const host = '127.0.0.1'
const port = 3333

app.listen(port, host, () => {
	console.log(`Server running on http://${host}:${port}`)
})
