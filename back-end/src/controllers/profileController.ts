import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
	async read(req: Request, res: Response) {
		const repository = getRepository(User)
		const user = await repository.findOne({ where: { id: req.params.id } })

		return res.send(user)
	},
	async authenticate(req: Request, res: Response) {
		const { email, password } = req.body

		const repository = getRepository(User)

		const user = await repository
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email: email })
			.getOne()

		if (!user) {
			return res.send({ errors: { email: 'Usuário não encontrado' } })
		}

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) {
			return res.send({ errors: { password: 'Senha incorreta' } })
		}

		const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

		return res.send({ user, token })
	},
}
