export interface Profile {
	id: number
	firstName: string
	lastName: string
	profilePicture: string | null
	email: string
	phone: string
}

export interface Product {
	id: number
	name: string
	description: string
	price: number
	image?: string
	category: string
}
