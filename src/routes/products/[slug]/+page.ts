import type { Product } from "$lib/types/Product.js";
import { createClient } from "@sanity/client";
import { error } from "@sveltejs/kit";

export const ssr = false;

const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROYECT_ID,
	dataset: "production",
	apiVersion: "2023-07-30",
	useCdn: false,
});

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const product: Product[] = await client.fetch(
			`
        *[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          description,
          price,
					slug,
          last_price,
          category->{ 
            _id,
            name,
            description,
            "src": image.asset->url
          },
          "images": images[].asset->url
        }
    `,
			{ slug: params.slug },
		);

		if (!product) {
			throw error(404, {
				message: "Not found",
			});
		}

		return {
			product: product,
		};
	} catch (err) {
		throw error(404, {
			message: "Not found",
		});
	}
}
