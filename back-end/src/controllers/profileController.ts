import { Request, Response } from 'express'
import { getConnection, Index } from 'typeorm'
import { User } from '../entity/User'
import bcrypt from 'bcryptjs'

export default {
	async read(req: Request, res: Response) {
		const user = await getConnection('default')
			.getRepository(User)
			.createQueryBuilder('user')
			.where('user.id = :id', { id: req.params.id })
			.getOne()

		return res.send(user)
	},
	async authenticate(req: Request, res: Response) {
		const { email, password } = req.body

		const user = await getConnection()
			.getRepository(User)
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email: email })
			.getOne()

		if (!user) res.status(400).send({ error: 'User not found' })
		else if (!(await bcrypt.compare(password, user.password)))
			res.status(400).send({ error: 'Wrong password' })
		else res.sendStatus(200)
	},
}
