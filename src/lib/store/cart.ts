import type { Product, ProductCart } from "$lib/types/Product";
import { writable } from "svelte/store";

export const cart = writable<ProductCart[]>([]);

export function addProduct(product: Product): void {
	cart.update((cartProducts) => {
		const index = cartProducts.findIndex(({ id }) => id === product.id);

		if (index < 0) {
			return [...cartProducts, { ...product, quantity: 1 }];
		} else {
			cartProducts[index].quantity += 1;
			return cartProducts;
		}
	});
}

export function removeProduct(id: number): void {
	cart.update((cart) => {
		return cart.filter((product) => id !== product.id);
	});
}

export function decrementQuantity(product: Product): void {
	cart.update((cart) => {
		const index = cart.findIndex(({ id }) => id === product.id);

		if (index < 0) {
			return [...cart];
		} else {
			if (cart[index].quantity <= 1) {
				removeProduct(index);
				return cart;
			} else {
				cart[index].quantity -= 1;
				return cart;
			}
		}
	});
}
