import type { Product, ProductCart } from "$lib/types/Product";
// import { notifications } from "@whizzes/svelte-notifications";
import { writable } from "svelte/store";

const storedCart = localStorage.getItem("cart");

export const cart = writable<ProductCart[]>(JSON.parse(storedCart || "[]"));

export function addProduct(product: Product): void {
	// notifications.notifySuccess("Product added", "Cart");
	cart.update((cartProducts) => {
		const index = cartProducts.findIndex(({ _id }) => _id === product._id);

		if (index < 0) {
			const newCart = [...cartProducts, { ...product, quantity: 1 }];
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		} else {
			cartProducts[index].quantity += 1;
			localStorage.setItem("cart", JSON.stringify(cartProducts));
			return cartProducts;
		}
	});
}

export function removeProduct(id: string): void {
	cart.update((cart) => {
		const newCart = cart.filter((product) => id !== product._id);
		localStorage.setItem("cart", JSON.stringify(newCart));
		return newCart;
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
				localStorage.setItem("cart", JSON.stringify(cart));
				return cart;
			} else {
				cart[index].quantity -= 1;
				localStorage.setItem("cart", JSON.stringify(cart));
				return cart;
			}
		}
	});
}

export function clearCart() {
	cart.set([]);
	localStorage.setItem("cart", JSON.stringify([]));
}
