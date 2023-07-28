<script lang="ts">
  import MdiCurrencyUsd from '~icons/mdi/currency-usd';
  import MdiTruckFastOutline from '~icons/mdi/truck-fast-outline';

  import Hero from '$lib/components/Hero.svelte';
  import Highlight from '$lib/components/Highlight.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data;

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
    <div class="flex items-center space-x-3">
      <div class="h-full w-0.5 rounded bg-slate-900" />
      <span class="text-slate-500"
        >We ensure our customers have the best shopping experience</span
      >
    </div>
  </div>
  <div class="flex mt-10 justify-between">
    {#each highlights as highlight}
      <Highlight {highlight} />
    {/each}
  </div>
</section>

<section>
  <h2 class="text-3xl mt-10">Featured products</h2>
  <div class="grid grid-cols-4 my-5">
    {#each data.products.slice(0, 4) as product}
      <ProductCard {product} />
    {/each}
  </div>
</section>
