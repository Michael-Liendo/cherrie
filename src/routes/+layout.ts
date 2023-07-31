export const ssr = false;

import type { HomeObject } from "$lib/types/sanity/Home.js";
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
		const homeData: HomeObject[] = await client.fetch(`
			*[_type == "home"]{
				...,
				hero[]{ 
					...,
					"src": src.asset->url,
				},
				picks_collections[]->{ 
					_id,
					name,
					description,
					"src": image.asset->url
				},
				featured_products[]->{
					_id,
					slug,
					name,
					description,
					price,
					last_price,
					"images": images[].asset->url
				}
			}
		`);

		return {
			home: homeData[0],
			notifications: homeData[0].notification,
		};
	} catch (err) {
		return { home: [], notifications: [] };
	}
}
