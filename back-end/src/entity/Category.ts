import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './Product'

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		unique: true,
	})
	name: string

	@Column()
	description: string

	@Column({
		nullable: true,
	})
	picture: string

	@OneToMany((type) => Product, (product) => product.category)
	products: Product[]
}
