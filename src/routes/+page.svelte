<script lang="ts">
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import 'swiper/css';

  import MdiCurrencyUsd from '~icons/mdi/currency-usd';
  import MdiTruckFastOutline from '~icons/mdi/truck-fast-outline';
  import MdiArrowRight from '~icons/mdi/arrow-right';
  import ChevronRight from '~icons/mdi/chevron-right';
  import ChevronLeft from '~icons/mdi/chevron-left';

  import Hero from '$lib/components/Hero.svelte';
  import Highlight from '$lib/components/Highlight.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import TextField from '$lib/components/TextField.svelte';
  import Pick from '$lib/components/Pick.svelte';

  export let data;

  let swiper: Swiper;

  onMount(() => {
    swiper = new Swiper('.swiper', {
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
  });

  const highlights = [
    {
      icon: MdiCurrencyUsd,
      title: 'Original Products',
      description:
        'We provide money back guarantee if the product are not original',
    },
    {
      icon: MdiTruckFastOutline,
      title: 'Fast Shipping',
      description:
        'Fast Shipping is the standard shipping method for the product',
    },
    {
      icon: MdiCurrencyUsd,
      title: 'Original Products',
      description:
        'We provide money back guarantee if the product are not original',
    },
    {
      icon: MdiTruckFastOutline,
      title: 'Fast Shipping',
      description:
        'Fast Shipping is the standard shipping method for the product',
    },
  ];
</script>

<Hero />

<section class="mt-16">
  <div class="flex justify-between">
    <h1 class="w-96 text-3xl font-medium">
      We provide best customer experiences
    </h1>
    <div class="hidden sm:flex items-center space-x-3">
      <div class="h-full w-0.5 rounded opacity-50 bg-slate-900" />
      <span class="text-slate-500"
        >We ensure our customers have the best shopping experience</span
      >
    </div>
  </div>
  <div class="flex flex-wrap mt-4 xl:flex-nowrap md:mt-10 md:justify-between">
    {#each highlights as highlight}
      <Highlight {highlight} />
    {/each}
  </div>
</section>

<section class="my-16">
  <h2 class="text-3xl font-medium mt-10">Currated picks</h2>
  <div class="flex flex-wrap justify-between my-5 space-y-5 md:space-y-0">
    {#each data.products.slice(0, 4) as product}
      <Pick {product} />
    {/each}
  </div>
</section>

<section class="my-20">
  <div class="flex justify-between items-center mb-10">
    <h2 class="text-4xl font-medium">Featured products</h2>
    <div class="flex top-5 divide-x-2 right-5">
      <button
        class="flex text-xl items-center px-2 py-2.5 border bg-white rounded-l-xl"
        on:click={() => {
          swiper.slidePrev();
        }}
        type="button"><ChevronLeft /></button
      >
      <button
        class="flex text-xl items-center px-2 py-2.5 border bg-white rounded-r-xl"
        on:click={() => {
          swiper.slideNext();
        }}
        type="button"><ChevronRight /></button
      >
    </div>
  </div>
  <div class="swiper mt-5">
    <div class="swiper-wrapper">
      {#each data.products.slice(0, 4) as product}
        <div class="swiper-slide">
          <ProductCard {product} />
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="md:flex md:h-96 w-full rounded-lg my-10">
  <figure class="h-full md:w-5/12">
    <img
      class="h-full w-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
      src="https://media.theeverygirl.com/wp-content/uploads/2022/06/the-everygirl-summer-clothes-gallery.jpg"
      alt="..."
    />
  </figure>
  <div
    class="p-10 h-full md:w-3/4 text-white bg-gray-900 rounded-b-lg md:rounded-bl-none md:rounded-r-lg flex flex-col justify-center"
  >
    <div>
      <small>LIMITED OFFER</small>
      <h1 class="text-2xl xl:text-7xl font-semibold">
        35% off only this friday and get special gift
      </h1>
    </div>
    <button
      class="flex justify-center items-center py-4 w-56 mt-10 text-lg bg-white text-slate-950 rounded-lg"
      >Grab it now <MdiArrowRight class="ml-3" /></button
    >
  </div>
</section>

<section class="flex flex-col justify-center items-center my-28">
  <h1 class="text-2xl md:text-5xl font-medium md:w-3/5 text-center">
    Subscribe to our newsletter to get updates to our lasted collections
  </h1>
  <small class="my-5 text-slate-800 text-sm mx-10"
    >Get 20% off on your first order just by subscribing to our newsletter</small
  >
  <div class="flex space-x-1">
    <TextField name="newsletter" placeholder="Enter your email" />
    <button class="text-white bg-slate-900 rounded-lg p-3 text-center"
      >Subscribe</button
    >
  </div>
  <small class="mt-4 text-gray-600 text-center"
    >You will be able to unsubscribe at any time.</small
  >
</section>
