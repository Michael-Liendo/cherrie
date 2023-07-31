// See https://kit.svelte.dev/docs/types#app

import type { Product } from "$lib/types/Product";
import type { HomeObject } from "$lib/types/sanity/Home";

/**
 * Timestamp Generated during building date
 */
declare const __BUILD_DATE__: string;

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			product: Product;
			home: HomeObject;
			notifications: string[];
		}
		// interface Platform {}
	}
}

export {};
