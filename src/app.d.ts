// See https://kit.svelte.dev/docs/types#app

import type { Product } from "$lib/types/Product";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			products: Product[];
			heroImages: HeroImages[];
			notifications: string[];
		}
		// interface Platform {}
	}
}

export {};
