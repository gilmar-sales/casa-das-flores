import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Customer } from '../entity/Customer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
	async read(req: Request, res: Response) {
		const repository = getRepository(Customer)
		const auth = jwt.decode(req.headers.authorization.split(' ')[1])
		const user = await repository.findOne({ where: { id: auth.id } })

		return res.send(user)
	},
	async authenticate(req: Request, res: Response) {
		const { email, password } = req.body

		const repository = getRepository(Customer)

		const user = await repository
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email: email })
			.getOne()

		if (!user) {
			return res.send({ errors: { email: 'E-mail não cadastrado.' } })
		}

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) {
			return res.send({ errors: { password: 'Senha incorreta.' } })
		}

		const token = jwt.sign(
			{ id: user.id, role: user.role },
			process.env.JWT_PRIVATE_KEY,
			{
				expiresIn: '1d',
				algorithm: 'RS256',
			}
		)


		return res.send({ user, token })
	},
}
