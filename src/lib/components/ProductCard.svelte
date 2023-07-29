<script lang="ts">
  import CartPlus from '~icons/mdi/cart-plus';
  import { addProduct } from '$lib/store/cart';
  import type { Product } from '$lib/types/Product';

  export let product: Product;
</script>

<div class="w-full max-w-sm bg-white rounded-lg">
  <a href={`/product/${product.id}`}>
    <img
      class="rounded-lg object-cover h-96 w-full"
      src={product.images[0]}
      alt={`Images of ${product.title}`}
    />
  </a>
  <div class="flex justify-between my-5">
    <a href={`/product/${product.id}`}>
      <h5 class="text-xl font-light text-gray-900">
        {product.title}
      </h5>
      <strong class="text-xl font-normal mt-3">${product.price}</strong>
    </a>

    <div class="flex items-center justify-between">
      <button
        on:click={() => addProduct(product)}
        type="button"
        class="text-white bg-slate-800 bdg-[#1d242d] rounded-lg p-3 text-center"
        ><CartPlus /></button
      >
    </div>
  </div>
</div>
