import { Request, Response } from 'express'
import { getConnection, Index, getRepository } from 'typeorm'
import { User } from '../entity/User'

export default {
	async create(req: Request, res: Response) {
		const { name, lastName, password, email } = req.body

		const repository = getRepository(User)

		const userExists = await repository.findOne({ where: { email } })

		if (userExists) {
			return res.send({
				errors: { email: 'Email já está sendo utilizado por outro usuário' },
			})
		}

		const user = repository.create({
			name: name + ' ' + lastName,
			email: email,
			password: password,
		})

		await repository.save(user)

		return res.json(user)
	},
	async read(req: Request, res: Response) {
		const users = await getConnection('default').manager.find(User)

		return res.send(users)
	},
	async update(req: Request, res: Response) {
		const repository = getRepository(User)

		await repository
			.createQueryBuilder()
			.update()
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
		const repository = getRepository(User)

		const user = await repository
			.createQueryBuilder()
			.delete()
			.where('id = :id', { id: req.params.id })
			.execute()

		return res.send(user)
	},
}
