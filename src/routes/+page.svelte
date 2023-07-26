<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data;
</script>

<div class="grid grid-cols-4 my-5">
  {#each data.products as product}
    <ProductCard {product} />
  {/each}
</div>
