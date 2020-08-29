import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BeforeInsert,
	BeforeUpdate,
} from 'typeorm'

import bcrypt from 'bcryptjs'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({
		select: false,
	})
	password: string

	@Column({
		unique: true,
	})
	email: string

	@Column({
		nullable: true,
	})
	cpf: string

	@Column({
		default: false,
	})
	is_admin: boolean

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 10)
	}
}
