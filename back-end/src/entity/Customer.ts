import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BeforeInsert,
	BeforeUpdate,
} from 'typeorm'

import bcrypt from 'bcryptjs'

@Entity()
export class Customer {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		default: 'user',
	})
	role: string

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column({
		select: false,
	})
	password: string

	@Column({
		unique: true,
	})
	email: string

	@Column({
		select: false,
		nullable: true,
	})
	cpf: string

	@Column({
		nullable: true,
	})
	profilePicture: string

	@Column({ nullable: true })
	createdDate: Date

	@Column({
		nullable: true,
	})
	phone: string

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 12)
	}

	@BeforeInsert()
	insertDate() {
		this.createdDate = new Date(Date.now())
	}
}
