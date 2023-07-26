import type { Product } from "$lib/types/Product";
import { writable } from "svelte/store";

export const cart = writable<Product[]>([]);

export function addProduct(product: Product): void {
	cart.update((cartProducts) => {
		cartProducts.push(product);
		return cartProducts;
	});
}
