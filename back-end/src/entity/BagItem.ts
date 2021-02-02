import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	Column,
	BeforeInsert,
	PrimaryColumn,
} from 'typeorm'

import { Customer } from './Customer'
import { Product } from './Product'

@Entity()
export class BagItem {
	@ManyToOne((type) => Customer, (customer) => customer.id, { primary: true })
	customer: Customer

	@ManyToOne((type) => Product, (product) => product.id, { primary: true })
	product: Product

	@Column({ default: 1 })
	count: number

	@Column({ nullable: true })
	createdDate: Date

	@BeforeInsert()
	insertDate() {
		this.createdDate = new Date(Date.now())
	}
}
