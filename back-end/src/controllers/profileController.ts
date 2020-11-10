import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Customer } from '../entity/Customer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
	async read(req: Request, res: Response) {
		const repository = getRepository(Customer)
		const user = await repository.findOne({ where: { id: req.params.id } })

		return res.send(user)
	},
	async authenticate(req: Request, res: Response) {
		const { email, password } = req.body

		const repository = getRepository(Customer)

		const emailFeedback = {
			name: 'email',
			errors: [],
		}
		const passwordFeedback = {
			name: 'password',
			errors: [],
		}

		const feedback = [emailFeedback, passwordFeedback]

		const user = await repository
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email: email })
			.getOne()

		if (!user) {
			emailFeedback.errors.push('Usuário não encontrado')
			return res.send({ errors: feedback })
		}

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) {
			passwordFeedback.errors.push('Senha incorreta')
			return res.send({ errors: feedback })
		}

		const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

		return res.send({ user, token })
	},
}
