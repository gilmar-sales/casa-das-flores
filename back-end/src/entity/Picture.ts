import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './Product'

@Entity()
export class Picture {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	path: string

	@ManyToOne((type) => Product, (product) => product.id)
	product: Product
}
