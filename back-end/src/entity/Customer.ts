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

	@Column()
	createdDate: Date

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 12)
	}
}
