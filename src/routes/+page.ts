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
		const response = await fetch("https://api.escuelajs.co/api/v1/products");
		const homeData: HomeObject[] = await client.fetch(`
			*[_type == "home"]{
				...,
				picks_categories[]->{ 
					_id,
					name,
					description,
					"src": image.asset->url
				}
			}
		`);

		console.log(homeData[0]);

		const productsData = await response.json();

		return {
			products: productsData.slice(0, 5),
			home: homeData[0],
			notifications: homeData[0].notification,
		};
	} catch (err) {
		return { products: [], home: [], notifications: [] };
	}
}
