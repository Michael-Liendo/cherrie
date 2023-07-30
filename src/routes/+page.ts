export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	try {
		const response = await fetch("https://api.escuelajs.co/api/v1/products");
		const data = await response.json();
		return { products: data.slice(0, 5) };
	} catch (err) {
		return { products: [] };
	}
}
