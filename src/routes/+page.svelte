<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data;
</script>

<Hero />
<div class="grid grid-cols-4 my-5">
  {#each data.products as product}
    <ProductCard {product} />
  {/each}
</div>
