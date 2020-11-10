import { Request, Response } from 'express'
import { getConnection, Index, getRepository, Timestamp } from 'typeorm'
import { Customer } from '../entity/Customer'

export default {
	async create(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body

		const repository = getRepository(Customer)

		const emailFeedback = {
			name: 'email',
			errors: [],
		}

		const feedback = [emailFeedback]

		const customerExists = await repository.findOne({ where: { email } })

		if (customerExists) {
			emailFeedback.errors.push(
				'Email já está sendo utilizado por outro usuário'
			)
			return res.send({ errors: feedback })
		}

		const customer = repository.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			createdDate: new Date(Date.now()),
		})

		await repository.save(customer)

		delete customer.password

		return res.json(customer)
	},
	async read(req: Request, res: Response) {
		const customers = await getConnection('default').manager.find(Customer)

		return res.send(customers)
	},
	async update(req: Request, res: Response) {
		const repository = getRepository(Customer)

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
		const repository = getRepository(Customer)

		const customer = await repository
			.createQueryBuilder()
			.delete()
			.where('id = :id', { id: req.params.id })
			.execute()

		return res.send(customer)
	},
}
