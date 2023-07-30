// See https://kit.svelte.dev/docs/types#app

import type { Product } from "$lib/types/Product";
import type { HomeObject } from "$lib/types/sanity/Home";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			products: Product[];
			home: HomeObject;
			notifications: string[];
		}
		// interface Platform {}
	}
}

export {};
