<script lang="ts">
  import MdiArrowRight from '~icons/mdi/arrow-right';
  import type { Product } from '$lib/types/Product';

  export let product: Product;
</script>

<div class="relative w-full md:w-80 h-80 flex justify-center">
  <img
    src={product.images[0]}
    alt="..."
    class="object-cover rounded-lg w-full h-full"
  />
  <button
    class="flex items-center justify-between w-3/4 text-lg p-3.5 bg-white rounded-lg absolute bottom-4"
    >{product.title} <MdiArrowRight /></button
  >
</div>
