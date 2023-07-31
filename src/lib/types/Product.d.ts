export interface Product {
	_id: string;
	images: string[];
	slug: Slug;
	name: string;
	description?: string;
	price: number;
	last_price?: number;
	collection: Collection;
}

export interface Slug {
	_type: string;
	current: string;
}
export interface Collection {
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
	last_price?: number;
	collection: Collection;
	quantity: number;
};
