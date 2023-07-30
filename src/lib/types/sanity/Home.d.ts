export interface HomeObject {
	notification: string[];
	call_to_action: CallToAction;
	_createdAt: string;
	_rev: string;
	_type: string;
	hero: HeroImages[];
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
