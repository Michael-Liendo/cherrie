<script lang="ts">
  import CartPlus from '~icons/mdi/cart-plus';

  import { addProduct } from '$lib/store/cart';

  import type { Product } from '$lib/types/Product';

  export let product: Product;
</script>

<section class="xl:w-[21rem] lg:w-96 2xl:w-[30rem] bg-white rounded-lg">
  <a class="relative" href={`/products/${product.slug.current}`}>
    {#if product.last_price}
      <span
        class="absolute text-xl bg-red-600 rounded-lg py-2 px-3 top-6 left-5 text-white"
        >SALE</span
      >
    {/if}
    <img
      class="rounded-lg object-cover h-96 xl:h-96 2xl:h-[34rem] w-full"
      src={product.images[0]}
      alt={`Images of ${product.name}`}
    />
  </a>
  <main class="flex justify-between my-5">
    <div>
      <a href={`/products/${product.slug.current}`}>
        <h1 class="text-xl font-light text-gray-900">
          {product.name}
        </h1>
      </a>
      <div class="flex items-center">
        <strong class="text-3xl font-medium">${product.price}</strong>
        {#if product.last_price}
          <p class="ml-2 text-xl text-gray-600 line-through mb-2">
            ${product.last_price}
          </p>
        {/if}
      </div>
    </div>

    <div class="flex items-center justify-between">
      <button
        aria-label="Add product to the cart"
        on:click={() => addProduct(product)}
        type="button"
        class="text-white bg-slate-800 rounded-lg text-lg p-4 text-center"
        ><CartPlus /></button
      >
    </div>
  </main>
</section>
