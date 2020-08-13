import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}
