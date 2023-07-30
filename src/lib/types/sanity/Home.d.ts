interface HomeObject {
	_id: string;
	_updatedAt: string;
	notification: string[];
	_createdAt: string;
	_rev: string;
	_type: string;
	hero: HeroImages[];
}

interface HeroImages {
	_key: string;
	url: string;
}
