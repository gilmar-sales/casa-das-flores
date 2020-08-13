import { Request, Response } from 'express'
import { getConnection, Index } from 'typeorm'
import { User } from '../entity/User'
import bcrypt from 'bcryptjs'

export default {
	async create(req: Request, res: Response) {
		const { name, password, email } = req.body

		const user = new User()
		user.name = name
		user.password = await bcrypt.hash(password, 10)
		user.email = email

		await getConnection()
			.manager.save(user)
			.then(() => {
				res.sendStatus(200)
			})
			.catch((error) => res.status(400).send({ error: error.detail }))
	},
	async read(req: Request, res: Response) {
		const users = await getConnection('default').manager.find(User)

		return res.send(users)
	},
	async update(req: Request, res: Response) {
		req.body.password = await bcrypt.hash(req.body.password, 10)

		await getConnection()
			.createQueryBuilder()
			.update(User)
			.where('id = :id', { id: req.params.id })
			.set({
				...req.body,
			})
			.execute()
			.then((result) => {
				res.sendStatus(200)
			})
			.catch((error) => {
				res.status(400).send(error.detail)
			})
	},
	async delete(req: Request, res: Response) {
		const user = await getConnection()
			.getRepository(User)
			.createQueryBuilder()
			.delete()
			.where('id = :id', { id: req.params.id })
			.execute()

		return res.send(user)
	},
}
