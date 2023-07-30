import type { Product, ProductCart } from "$lib/types/Product";
import { writable } from "svelte/store";

export const cart = writable<ProductCart[]>([]);

export function addProduct(product: Product): void {
	cart.update((cartProducts) => {
		const index = cartProducts.findIndex(({ _id }) => _id === product._id);

		if (index < 0) {
			return [...cartProducts, { ...product, quantity: 1 }];
		} else {
			cartProducts[index].quantity += 1;
			return cartProducts;
		}
	});
}

export function removeProduct(id: string): void {
	cart.update((cart) => {
		return cart.filter((product) => id !== product._id);
	});
}

export function decrementQuantity(product: Product): void {
	cart.update((cart) => {
		const index = cart.findIndex(({ _id }) => _id === product._id);

		if (index < 0) {
			return [...cart];
		} else {
			if (cart[index].quantity <= 1) {
				removeProduct(cart[index]._id);
				return cart;
			} else {
				cart[index].quantity -= 1;
				return cart;
			}
		}
	});
}
