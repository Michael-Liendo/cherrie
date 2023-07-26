<script lang="ts">
  import Trash from '~icons/mdi/delete-outline';
  import type { Product } from '$lib/types/Product';

  export let product: Product;
</script>

<div class="flex my-2.5">
  <div>
    <img
      src={product.images[0]}
      class="rounded-sm w-20 h-20 object-cover"
      alt={product.title}
    />
  </div>

  <div class="flex justify-between w-full ml-3">
    <div class="flex flex-col">
      <div class="flex justify-between">
        <span title={product.title} class="text-xs w-40 truncate text-gray-500">
          {product.title}
        </span>
        <i class="z-30 py-1.5 px-3 hover:cursor-pointer">
          <Trash />
        </i>
      </div>
      <span class="text-sm">${product.price}</span>
    </div>
  </div>
</div>
