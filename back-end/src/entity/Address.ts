import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Address {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	street: string

	@Column()
	city: string

	@Column()
	state: string

	@Column({ nullable: true })
	number: number

	@Column({ nullable: true })
	complement: string
}
