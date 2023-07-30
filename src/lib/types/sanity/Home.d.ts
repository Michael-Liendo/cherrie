export interface HomeObject {
	notification: string[];
	call_to_action: CallToAction;
	hero: HeroImages[];
	picks_categories: PicksCategory[];
	_createdAt: string;
	_rev: string;
	_type: string;
	_id: string;
	_updatedAt: string;
}

export interface HeroImages {
	_key: string;
	src: string;
}

export interface CallToAction {
	button: string;
	small: string;
	src: string;
	title: string;
}

export interface PicksCategory {
	_id: string;
	name: string;
	description: string;
	src: string;
}
