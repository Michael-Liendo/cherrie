<script lang="ts">
  import { page } from '$app/stores';
  import MdiClose from '~icons/mdi/close';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';

  let notification = true;

  let notificationText =
    $page.data.notifications[
      Math.floor(Math.random() * $page.data.notifications.length)
    ];
</script>

{#if notification}
  <div
    class="flex items-center justify-between h-10 bg-slate-900 text-white px-2 sm:px-16 md:px-20 xl:px-28"
  >
    <div />
    <p>
      {@html notificationText}
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
