export const ssr = false;

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
		const homeData: HomeObject[] = await client.fetch(`*[_type == "home"]`);

		const productsData = await response.json();
		console.log(homeData);

		return {
			products: productsData.slice(0, 5),
			heroImages: homeData[0].hero,
			notifications: homeData[0].notification,
		};
	} catch (err) {
		return { products: [], images: [], notifications: [] };
	}
}
