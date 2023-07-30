<script lang="ts">
  import MdiClose from '~icons/mdi/close';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
  let notification = true;
</script>

{#if notification}
  <div
    class="flex items-center justify-between h-10 bg-slate-900 text-white px-2 sm:px-16 md:px-20 xl:px-28"
  >
    <div />
    <p>
      Sign up and GET 20% OFF for your first order. <a
        class="underline text-gray-50 hover:text-gray-200"
        href="https://">Sign up now</a
      >
    </p>
    <button
      type="button"
      on:click={() => {
        notification = false;
      }}><MdiClose /></button
    >
  </div>
{/if}
<div class="mx-2 sm:mx-16 md:mx-20 xl:mx-28">
  <Navbar />
  <slot />
</div>
<Footer />
