export interface Profile {
	id: number
	role: string
	firstName: string
	lastName: string
	profilePicture: string | null
	email: string
	phone: string
}

export interface Product {
	id: number
	name: string
	slug: string
	description: string
	unitPrice: number
	pictures: [string]
	category: string
}
