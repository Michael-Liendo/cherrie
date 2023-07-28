export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[];
}

export interface Category {
	id: number;
	name: string;
	image: string;
}

export type ProductCart = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	quantity: number;
	images: string[];
};
