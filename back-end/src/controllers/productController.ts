import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Product } from '../entity/Product'
import { Picture } from '../entity/Picture'

export default {
	async create(req: Request, res: Response) {
		const {
			name,
			description,
			unitPrice,
			picturesPaths,
			width,
			height,
			depth,
			category,
		} = req.body

		const productRepository = getRepository(Product)
		const pictureRepository = getRepository(Picture)

		const productExists = await productRepository.findOne({ where: { name } })

		if (productExists) {
			return res.send({
				errors: { email: 'Nome já está sendo utilizado por outro produto' },
			})
		}

		const pictures: Picture[] = []

		const product = productRepository.create({
			name: name,
			description: description,
			unitPrice: unitPrice,
			width: width,
			height: height,
			depth: depth,
			createdDate: new Date(Date.now()),
			category: category,
		})

		await productRepository.save(product)

		picturesPaths.map((path) => {
			const picture = pictureRepository.create({ path: path, product: product })
			pictureRepository.save(picture)
			pictures.push(picture)
		})

		return res.send(product)
	},

	async read(req: Request, res: Response) {
		const { page } = req.params
		const productsPerPage = 8

		const repository = getRepository(Product)
		const products = await repository
			.findAndCount({
				skip: (+page - 1) * productsPerPage,
				take: productsPerPage,
				relations: ['pictures', 'category'],
			})
			.catch((error) => {
				res.send(error)
			})

		return res.send({
			pages: Math.ceil(products[1] / productsPerPage),
			products: products[0],
		})
	},
	async update(req: Request, res: Response) {},
	async delete(req: Request, res: Response) {},
}
