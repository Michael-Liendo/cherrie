import { browser } from "$app/environment";
import type { Product, ProductCart } from "$lib/types/Product";
import { notifications } from "@whizzes/svelte-notifications";
import { writable } from "svelte/store";

const storedCart = browser ? localStorage.getItem("cart") : null;

export const cart = writable<ProductCart[]>(JSON.parse(storedCart || "[]"));

export function addProduct(product: Product): void {
	notifications.notifySuccess("Product added", "Cart");
	cart.update((cartProducts) => {
		const index = cartProducts.findIndex(({ _id }) => _id === product._id);

		if (index < 0) {
			const newCart = [...cartProducts, { ...product, quantity: 1 }];
			if (browser) {
				localStorage.setItem("cart", JSON.stringify(newCart));
			}
			return newCart;
		} else {
			cartProducts[index].quantity += 1;
			if (browser) {
				localStorage.setItem("cart", JSON.stringify(cartProducts));
			}
			return cartProducts;
		}
	});
}

// ...

export function removeProduct(id: string): void {
	cart.update((cartProducts) => {
		const newCart = cartProducts.filter((product) => id !== product._id);
		if (browser) {
			localStorage.setItem("cart", JSON.stringify(newCart));
		}
		return newCart;
	});
}

export function decrementQuantity(product: Product): void {
	cart.update((cartProducts) => {
		const index = cartProducts.findIndex(({ _id }) => _id === product._id);

		if (index < 0) {
			return [...cartProducts];
		} else {
			if (cartProducts[index].quantity <= 1) {
				removeProduct(cartProducts[index]._id);
				if (browser) {
					localStorage.setItem("cart", JSON.stringify(cartProducts));
				}
				return cartProducts;
			} else {
				cartProducts[index].quantity -= 1;
				if (browser) {
					localStorage.setItem("cart", JSON.stringify(cartProducts));
				}
				return cartProducts;
			}
		}
	});
}

export function clearCart() {
	cart.set([]);
	if (browser) {
		localStorage.setItem("cart", JSON.stringify([]));
	}
}
