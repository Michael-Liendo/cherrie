import type { Product } from "$lib/types/Product.js";
import { createClient } from "@sanity/client";
import { error } from "@sveltejs/kit";

const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROYECT_ID,
	dataset: "production",
	apiVersion: "2023-07-30",
	useCdn: false,
});

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const products: Product[] = await client.fetch(
			` *[_type == "product" && references($collectionId)] {
				_id,
          name,
          description,
          price,
					slug,
          last_price,
          collection->{ 
            _id,
            name,
            description,
            "src": image.asset->url
          },
          "images": images[].asset->url
			}
    `,
			{ collectionId: params.slug },
		);

		return {
			products: products,
		};
	} catch (err) {
		return { products: [] };
	}
}
