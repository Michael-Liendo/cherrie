<script lang="ts">
  import CartPlus from '~icons/mdi/cart-plus';
  import MdiEarth from '~icons/mdi/earth';

  import { page } from '$app/stores';

  import { addProduct } from '$lib/store/cart';

  let product = $page.data.product;

  let mainImageIndex = 0;

  const productUrl = `https://sarteza.com/products/${product.slug.current}`;
</script>

<svelte:head>
  <title>{product.name} - Sarteza</title>
  <meta name="description" content={product.description || 'Sin descripción'} />
  <meta
    name="keywords"
    content="Sarteza, ropa, accesorios, moda, tendencias, {product.name},{product
      .collection?.name}"
  />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="{product.name} - Sarteza" />
  <meta
    itemprop="description"
    content={product.description || 'Sin descripción'}
  />
  <meta itemprop="image" content={product.images[mainImageIndex]} />
  <!-- Open Graph data -->
  <meta property="og:title" content="{product.name} - Sarteza" />
  <meta property="og:type" content="product" />
  <meta property="og:url" content={productUrl} />
  <meta property="og:image" content={product.images[mainImageIndex]} />
  <meta
    property="og:description"
    content={product.description || 'Sin descripción'}
  />
  <meta property="og:site_name" content="Sarteza" />
  <!-- Facebook graph data -->
</svelte:head>

<div class="my-8">
  <nav class="flex">
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
              href="/product"
              class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
            >
              Productos
            </a>
          </div>
        </div>
      </li>

      <li class="text-left">
        <div class="flex items-center">
          <span class="mx-2 text-gray-400">/</span>
          <div class="-m-1">
            <a
              href={`/products/${product.slug.current}`}
              title={product.name}
              class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              aria-current="page"
            >
              {product.name}
            </a>
          </div>
        </div>
      </li>
    </ol>
  </nav>

  <div
    class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"
  >
    <div class="lg:col-span-3 lg:row-end-1">
      <div class="lg:flex lg:items-start">
        <div class="lg:order-2 lg:ml-5">
          <div class="max-w-xl overflow-hidden rounded-lg">
            <img
              class="h-full w-full max-w-full object-cover"
              src={product.images[mainImageIndex]}
              alt={product.name}
            />
          </div>
        </div>

        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex flex-row items-start lg:flex-col">
            {#each product.images as image, index}
              <button
                type="button"
                on:click={() => {
                  mainImageIndex = index;
                }}
                class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
              >
                <img
                  class="h-full w-full object-cover"
                  src={image}
                  alt={product.name}
                />
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        {#if product.last_price}
          <span class=" bg-red-600 rounded-lg py-1.5 px-2 text-white"
            >DESCUENTO</span
          >
        {/if}
      </div>
      <span class="text-gray-900">{product.collection?.name}</span>
      <div
        class="mt-5 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0"
      >
        <div class="flex items-start">
          <h1 class="text-3xl font-bold">${product.price}</h1>
          {#if product.last_price}
            <small class="text-lg line-through ml-2"
              >${product.last_price}</small
            >
          {/if}
        </div>

        <button
          type="button"
          on:click={() => addProduct(product)}
          class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          <CartPlus class="mr-4" />
          Añadir al carrito
        </button>
      </div>

      <ul class="mt-8 space-y-2">
        <li
          class="flex items-center text-left text-sm font-medium text-gray-600"
        >
          <MdiEarth class="text-base" />
          Envío
        </li>
      </ul>
    </div>

    <div class="lg:col-span-3">
      <div class="border-b border-gray-300">
        <nav class="flex gap-4">
          <span
            title="Descripción"
            class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
          >
            Descripción
          </span>
        </nav>
      </div>

      <div class="mt-4 flow-root sm:mt-7">
        {@html product.description || 'Sin descripción'}
      </div>
    </div>
  </div>
</div>
<div class="mb-8">
  <h2 class="text-2xl font-bold tracking-tight text-gray-900">
    Clientes que también compraron
  </h2>

  <div class="mt-6 flex justify-between flex-wrap">
    {#each $page.data.home.featured_products.slice(0, 3) as product}
      <section class="xl:w-[21rem] lg:w-96 2xl:w-[30rem] bg-white rounded-lg">
        <a
          data-sveltekit-reload
          class="relative"
          href={`/products/${product.slug.current}`}
        >
          {#if product.last_price}
            <span
              class="absolute text-xl bg-red-600 rounded-lg py-2 px-3 top-6 left-5 text-white"
              >DESCUENTO</span
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
            <a data-sveltekit-reload href={`/products/${product.slug.current}`}>
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
              aria-label="Add product to cart"
              on:click={() => addProduct(product)}
              type="button"
              class="text-white bg-slate-800 rounded-lg text-lg p-4 text-center"
              ><CartPlus /></button
            >
          </div>
        </main>
      </section>
    {:else}
      <p>No hay productos para recomendar</p>
    {/each}
  </div>
</div>
