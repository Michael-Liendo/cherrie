export const ssr = false;

import type { Product } from "$lib/types/Product.js";
import { createClient } from "@sanity/client";

const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROYECT_ID,
	dataset: "production",
	apiVersion: "2023-07-30",
	useCdn: false,
});

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	try {
		const products: Product[] = await client.fetch(`
			*[_type == "product"]{
				...,
        "images": images[].asset->url
			}
		`);

		return {
			products: products,
		};
	} catch (err) {
		return { products: [] };
	}
}
