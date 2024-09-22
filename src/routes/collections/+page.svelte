<script lang="ts">
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
  import type { Collection } from '$lib/types/sanity/Home';

  let collections: Collection[] = $page.data.collections;
</script>

<svelte:head>
  <title>Colecciones - Chérrie</title>
  <meta name="description" content={'Lista de colecciones de cherrie'} />
  <meta
    name="keywords"
    content="Chérrie, ropa, accesorios, moda, tendencias, products de cherrie, mejores Colecciones"
  />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="Colecciones - Chérrie" />
  <meta itemprop="description" content={'Lista de colecciones de cherrie'} />

  <meta itemprop="image" content="https://cherrie.lat/images/logo.png" />
  <!-- Open Graph data -->
  <meta property="og:title" content="Colecciones - Chérrie" />
  <meta property="og:type" content="product" />
  <meta property="og:url" content="https://cherrie.lat/products" />
  <meta property="og:image" content="https://cherrie.lat/images/logo.png" />
  <meta property="og:description" content="Lista de colecciones de cherrie" />
  <meta property="og:site_name" content="Chérrie" />
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
            Colecciones
          </a>
        </div>
      </div>
    </li>
  </ol>
</nav>

<div class="min-h-screen mt-5 flex justify-between flex-wrap">
  {#each collections as collection}
    <a
      href={`/collections/${collection._id}`}
      class="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow"
    >
      <img
        class="rounded-t-lg object-cover"
        src={collection.src}
        alt={collection.name}
      />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {collection.name}
        </h5>
        {#if collection.description}
          <p class="mb-3 font-normal text-gray-700">
            {collection.description}
          </p>
        {/if}
      </div>
    </a>
  {/each}
</div>
