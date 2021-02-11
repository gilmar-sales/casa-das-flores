import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { BagItem } from '../entity/BagItem'
import { Customer } from '../entity/Customer'
import { Product } from '../entity/Product'

export default {
	async create(req: Request, res: Response) {
		const { product_id, count } = req.body

		const customerRepository = getRepository(Customer)
		const productRepository = getRepository(Product)
		const bagItemRepository = getRepository(BagItem)

		const customer = await customerRepository.findOne({ id: req.userId })
		const product = await productRepository.findOne({ id: product_id })

		const bagItem = bagItemRepository.create({ customer, product, count })

		bagItemRepository
			.save(bagItem)
			.then(() => res.sendStatus(200))
			.catch((error) => res.send(error))
	},
	async read(req: Request, res: Response) {
		const bagItemRepository = getRepository(BagItem)

		const bagItems = await bagItemRepository.find({
			where: `customer_id = ${req.userId}`,
			relations: ['product', 'product.pictures'],
		})

		res.send(bagItems.map((item) => ({ ...item.product, count: item.count })))
	},
	async update(req: Request, res: Response) {
		const repository = getRepository(BagItem)
		const { product_id, count } = req.body

		await repository
			.createQueryBuilder()
			.update()
			.where('product_id = :id and customer_id = :customer_id', {
				id: product_id,
				customer_id: req.userId,
			})
			.set({ count })
			.execute()
			.then((result) => {
				res.sendStatus(200)
			})
			.catch((error) => {
				res.status(400).send(error.detail)
			})
	},
	async delete(req: Request, res: Response) {
		const repository = getRepository(BagItem)

		const bagItem = await repository
			.createQueryBuilder()
			.delete()
			.where('product_id = :id and customer_id = :customer_id', {
				id: req.params.id,
				customer_id: req.userId,
			})
			.execute()
			.then(() => {
				return res.sendStatus(200)
			})
			.catch((error) => {
				res.sendStatus(500)
			})
	},
}
