<script lang="ts">
  import Trash from '~icons/mdi/delete-outline';
  import type { Product, ProductCart } from '$lib/types/Product';
  import {
    addProduct,
    decrementQuantity,
    removeProduct,
  } from '$lib/store/cart';

  export let product: ProductCart;
</script>

<div class="flex my-2.5">
  <div>
    <img
      src={product.images[0]}
      class="rounded-sm w-20 h-20 object-cover"
      alt={product.title}
      width="250"
      height="250"
    />
  </div>

  <div class="flex justify-between w-full ml-3">
    <div class="flex flex-col">
      <div class="flex justify-between">
        <span title={product.title} class="text-xs w-40 truncate text-gray-500">
          {product.title}
        </span>
        <button
          on:click={() => removeProduct(product.id)}
          class="z-30 py-1.5 px-3 hover:cursor-pointer"
        >
          <Trash />
        </button>
      </div>
      <span class="text-sm">${product.price}</span>
      <div
        class="flex flex-row h-8 w-1/2 rounded-lg relative bg-transparent mt-1"
      >
        <button
          on:click={() => decrementQuantity(product)}
          class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
        >
          <span class="m-auto text-xl font-light">−</span>
        </button>
        <span
          class="outline-none text-gray-600 justify-center focus:outline-none text-center w-full bg-gray-300 font-semibold flex items-center"
        >
          {product.quantity}
        </span>
        <button
          on:click={() => addProduct(product)}
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
        >
          <span class="m-auto text-xl font-light">+</span>
        </button>
      </div>
    </div>
  </div>
</div>
