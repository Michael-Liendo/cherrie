<script lang="ts">
  import { page } from '$app/stores';
  import ProductCard from '$lib/components/Home/ProductCard.svelte';
</script>

<nav class="flex mt-5">
  <ol role="list" class="flex items-center">
    <li class="text-left">
      <div class="-m-1">
        <a
          href="/"
          class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
        >
          Inicio
        </a>
      </div>
    </li>

    <li class="text-left">
      <div class="flex items-center">
        <span class="mx-2 text-gray-400">/</span>
        <div class="-m-1">
          <a
            href="/products"
            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            Productos
          </a>
        </div>
      </div>
    </li>
  </ol>
</nav>

<div
  class="min-h-screen mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
>
  {#each $page.data.products as product}
    <ProductCard {product} />
  {/each}
</div>
