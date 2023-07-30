<script lang="ts">
  import CartPlus from '~icons/mdi/cart-plus';

  import { addProduct } from '$lib/store/cart';

  import type { Product } from '$lib/types/Product';

  export let product: Product;
</script>

<div class="xl:w-[21rem] lg:w-96 2xl:w-[30rem] bg-white rounded-lg">
  <a href={`/product/${product.slug.current}`}>
    <img
      class="rounded-lg object-cover h-96 xl:h-96 2xl:h-[34rem] w-full"
      src={product.images[0]}
      alt={`Images of ${product.name}`}
    />
  </a>
  <div class="flex justify-between my-5">
    <a href={`/product/${product.slug.current}`}>
      <h5 class="text-xl font-light text-gray-900">
        {product.name}
      </h5>
      <strong class="text-3xl font-medium mt-3">${product.price}</strong>
    </a>

    <div class="flex items-center justify-between">
      <button
        on:click={() => addProduct(product)}
        type="button"
        class="text-white bg-slate-800 rounded-lg p-3 text-center"
        ><CartPlus /></button
      >
    </div>
  </div>
</div>
