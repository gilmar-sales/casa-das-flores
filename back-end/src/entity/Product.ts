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

	@Column({ unique: true })
	name: string

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

	@Column({ nullable: true })
	width: number

	@Column({ nullable: true })
	height: number

	@Column({ nullable: true })
	depth: number

	@Column()
	createdDate: Date
}
