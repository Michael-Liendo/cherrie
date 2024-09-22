<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Swiper from 'swiper';
  import 'swiper/css';

  import MdiCurrencyUsd from '~icons/mdi/currency-usd';
  import MdiTruckFastOutline from '~icons/mdi/truck-fast-outline';
  import MdiArrowRight from '~icons/mdi/arrow-right';
  import ChevronRight from '~icons/mdi/chevron-right';
  import ChevronLeft from '~icons/mdi/chevron-left';
  import MdiRobotHappyOutline from '~icons/mdi/robot-happy-outline';
  import MdiCreationOutline from '~icons/mdi/creation-outline';

  import Hero from '$lib/components/Home/Hero.svelte';
  import Highlight from '$lib/components/Home/Highlight.svelte';
  import ProductCard from '$lib/components/Home/ProductCard.svelte';
  import TextField from '$lib/components/TextField.svelte';
  import Pick from '$lib/components/Home/Pick.svelte';

  let featuredProductsSwiper: Swiper;

  onMount(() => {
    featuredProductsSwiper = new Swiper('.featured-products-swiper', {
      slidesPerView: 1,
      spaceBetween: '7%',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper('.pick-collections', {
      slidesPerView: 1,
      spaceBetween: '7%',
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
      },
    });
  });

  const highlights = [
    {
      icon: MdiCurrencyUsd,
      title: 'Productos a bajos precio',
      description:
        'Ofrecemos productos de buena calidad, con estilo y un bajo costo',
    },
    {
      icon: MdiRobotHappyOutline,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros productos son de la mejor calidad',
    },
    {
      icon: MdiCreationOutline,
      title: 'Nueva llegada todos los meses',
      description: 'Actualizamos nuestras colecciones todos los meses',
    },
    {
      icon: MdiTruckFastOutline,
      title: 'Envío rápido',
      description:
        'A través de tu empresa preferida de envíos, Zoom, MRW, y Tealca',
    },
  ];
</script>

<svelte:head>
  <title>Chérrie - Tienda de Lencería en Venezuela</title>
  <meta
    name="description"
    content="Descubre la mejor selección de ropa de moda en Chérrie, la tienda líder en Venezuela. Encuentra las últimas tendencias y estilos para mujeres."
  />
  <meta
    name="keywords"
    content="Chérrie, tienda de ropa, accesorios de moda, Venezuela, tendencias, estilo, compras en línea, envíos rápidos, mejor tienda de Venezuela"
  />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="Chérrie - Tienda de Lencería en Venezuela" />
  <meta
    itemprop="description"
    content="Descubre la mejor selección de lencería de moda en Chérrie, la tienda líder en Venezuela. Encuentra las últimas tendencias y estilos para mujeres."
  />
  <meta itemprop="image" content="https://cherrie.lat/images/logo.png" />
  <!-- Open Graph data -->
  <meta
    property="og:title"
    content="Chérrie - Tienda de Lencería en Venezuela"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cherrie.lat/" />
  <meta property="og:image" content="https://cherrie.lat/images/logo.png" />
  <meta
    property="og:description"
    content="Descubre la mejor selección de ropa  de moda en Chérrie, la tienda líder en Venezuela. Encuentra las últimas tendencias y estilos para mujeres."
  />
  <meta property="og:site_name" content="Chérrie" />
  <!-- Facebook graph data -->
</svelte:head>

<Hero images={$page.data.home.hero} />

<section class="mt-16">
  <div class="flex justify-between">
    <h1 class="w-96 text-3xl font-medium">
      Brindamos las mejores experiencias al cliente
    </h1>
    <div class="hidden sm:flex items-center space-x-3">
      <div class="h-full w-0.5 rounded opacity-50 bg-slate-900" />
      <span class="text-slate-500"
        >Nos aseguramos de que nuestros clientes tengan la mejor experiencia de
        compra</span
      >
    </div>
  </div>
  <div class="flex flex-wrap mt-4 xl:flex-nowrap md:mt-10 md:justify-between">
    {#each highlights || [] as highlight}
      <Highlight {highlight} />
    {:else}
      <div />
    {/each}
  </div>
</section>

<section class="my-20">
  <h2 class="text-4xl font-medium mb-10">Colecciones</h2>
  <div class="swiper pick-collections mt-5">
    <div class="swiper-wrapper">
      {#each $page.data.home.picks_collections || [] as collection}
        <div class="swiper-slide">
          <Pick {collection} />
        </div>
      {:else}
        <div />
      {/each}
    </div>
  </div>
</section>

<section class="my-20">
  <div class="flex justify-between items-center mb-10">
    <h2 class="text-4xl font-medium">Productos Destacados</h2>
    <div class="flex top-5 divide-x-2 right-5">
      <button
        aria-label="Previous image on slider"
        class="flex text-xl items-center px-2 py-2.5 border bg-white rounded-l-xl"
        on:click={() => {
          featuredProductsSwiper.slidePrev();
        }}
        type="button"><ChevronLeft /></button
      >
      <button
        aria-label="Next image on slider"
        class="flex text-xl items-center px-2 py-2.5 border bg-white rounded-r-xl"
        on:click={() => {
          featuredProductsSwiper.slideNext();
        }}
        type="button"><ChevronRight /></button
      >
    </div>
  </div>
  <div class="swiper featured-products-swiper mt-5">
    <div class="swiper-wrapper">
      {#each $page.data.home.featured_products || [] as product}
        <div class="swiper-slide">
          <ProductCard {product} />
        </div>
      {:else}
        <div />
      {/each}
    </div>
  </div>
</section>

<section class="md:flex md:h-96 w-full rounded-lg my-10">
  <figure class="h-full md:w-5/12">
    <img
      class="h-full w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
      src={$page.data.home.call_to_action.src}
      alt={$page.data.home.call_to_action.title}
    />
  </figure>
  <div
    class="p-10 h-full md:w-3/4 text-white bg-gray-900 rounded-b-lg md:rounded-bl-none md:rounded-r-lg flex flex-col justify-center"
  >
    <div>
      <small>{$page.data.home.call_to_action.small}</small>
      <h1 class="text-2xl xl:text-7xl font-semibold">
        {$page.data.home.call_to_action.title}
      </h1>
    </div>
    <a href={$page.data.home.call_to_action.button.url}>
      <button
        type="button"
        class="flex justify-center items-center py-4 w-56 mt-10 text-lg bg-white text-slate-950 rounded-lg"
        >{$page.data.home.call_to_action.button.name}
        <MdiArrowRight class="ml-3" /></button
      >
    </a>
  </div>
</section>

<!-- <section class="flex flex-col justify-center items-center my-28">
  <h1 class="text-2xl md:text-5xl font-medium md:w-3/5 text-center">
    Suscríbase a nuestro newsletter para recibir actualizaciones
  </h1>
  <small class="my-5 text-slate-800 text-sm mx-10"
    >Consigue un 20% de descuento en tu primer pedido simplemente suscribiéndote
    a nuestra newsletter</small
  >
  <div class="flex space-x-1">
    <TextField name="newsletter" placeholder="Enter your email" />
    <button class="text-white bg-slate-900 rounded-lg p-3 text-center"
      >Suscribirse</button
    >
  </div>
  <small class="mt-4 text-gray-600 text-center"
    >Podrás darte de baja en cualquier momento.</small
  >
</section> -->
