import type { Product } from "../Product";

export interface HomeObject {
	notification: string[];
	call_to_action: CallToAction;
	hero: HeroImages[];
	featured_products: Product[];
	picks_collections: Collection[];
	_createdAt: string;
	_rev: string;
	_type: string;
	_id: string;
	_updatedAt: string;
}

export interface HeroImages {
	button: Button;
	_key: string;
	_type: string;
	src: string;
	title: string;
}

interface Button {
	name: string;
	url: string;
}

export interface CallToAction {
	button: Button;
	small: string;
	src: string;
	title: string;
}

export interface Collection {
	_id: string;
	name: string;
	description: string;
	src: string;
}
