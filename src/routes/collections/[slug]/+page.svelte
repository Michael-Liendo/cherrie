<script lang="ts">
  import { page } from '$app/stores';
  import ProductCard from '$lib/components/Home/ProductCard.svelte';
</script>

<svelte:head>
  <title>Productos - Cherrie</title>
  <meta name="description" content={'Lista de productos de cherrie'} />
  <meta
    name="keywords"
    content="Cherrie, ropa, accesorios, moda, tendencias, products de cherrie, mejores productos"
  />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="Productos - Cherrie" />
  <meta itemprop="description" content={'Lista de productos de cherrie'} />

  <meta itemprop="image" content="https://cherrie.lat/images/logo.png" />
  <!-- Open Graph data -->
  <meta property="og:title" content="Productos - Cherrie" />
  <meta property="og:type" content="product" />
  <meta property="og:url" content="https://cherrie.lat/products" />
  <meta property="og:image" content="https://cherrie.lat/images/logo.png" />
  <meta property="og:description" content="Lista de productos de cherrie" />
  <meta property="og:site_name" content="Cherrie" />
</svelte:head>

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
            href="/collections"
            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            colecciones
          </a>
        </div>
      </div>
    </li>
    <li class="text-left">
      <div class="flex items-center">
        <span class="mx-2 text-gray-400">/</span>
        <div class="-m-1">
          <a
            href="/collections"
            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            {$page.data.products[0].collection.name}
          </a>
        </div>
      </div>
    </li>
  </ol>
</nav>

<div class="min-h-screen mt-5 flex justify-between flex-wrap">
  {#each $page.data.products as product}
    <ProductCard {product} />
  {/each}
</div>
