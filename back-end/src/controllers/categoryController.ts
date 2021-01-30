import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Category } from '../entity/Category'

export default {
	async create(req: Request, res: Response) {
		if (req.userRole !== 'admin') return res.sendStatus(401)

		const { name, description, picture } = req.body

		const repository = getRepository(Category)

		const category = repository.create({
			name: name,
			description: description,
			picture: picture,
		})

		await repository.save(category).catch((error) => {
			return res.send(error)
		})

		return res.send(category)
	},
	async read(req: Request, res: Response) {
		const repository = getRepository(Category)

		const categories = await repository.find().catch((error) => {
			res.send(error)
		})

		return res.send(categories)
	},
}
