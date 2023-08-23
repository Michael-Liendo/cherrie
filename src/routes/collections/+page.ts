import type { Collection, Product } from "$lib/types/Product.js";
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
		const collections: Collection[] = await client.fetch(`
			*[_type == "collection"]{
				...,
        "src": image.asset->url
			}
		`);

		return {
			collections,
		};
	} catch (err) {
		return { collections: [] };
	}
}
