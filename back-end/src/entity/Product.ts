import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from 'typeorm'

import { Category } from './Category'
import { Picture } from './Picture'

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ unique: true })
	slug: string

	@Column()
	description: string

	@ManyToOne((type) => Category, (category) => category.products)
	category: Category

	@Column('decimal', {
		precision: 10,
		scale: 2,
	})
	unitPrice: number

	@OneToMany((type) => Picture, (picture) => picture.product)
	pictures: Picture[]

	@Column({
		default: true,
	})
	active: boolean

	@Column('decimal', { nullable: true, precision: 10, scale: 2 })
	width: number

	@Column('decimal', { nullable: true, precision: 10, scale: 2 })
	height: number

	@Column('decimal', { nullable: true, precision: 10, scale: 2 })
	lenght: number

	@Column()
	createdDate: Date
}
