export interface Product {
	_id: string;
	images: string[];
	slug: Slug;
	name: string;
	description?: string;
	price: number;
	category: Category;
}

export interface Slug {
	_type: string;
	current: string;
}
export interface Category {
	id: number;
	name: string;
	image: string;
}

export type ProductCart = {
	_id: string;
	images: string[];
	slug: Slug;
	name: string;
	description?: string;
	price: number;
	category: Category;
	quantity: number;
};
