<script lang="ts">
  import { NotificationList, Position } from '@whizzes/svelte-notifications';
  import MdiClose from '~icons/mdi/close';
  import MdiCheck from '~icons/mdi/check';

  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';

  let notification: boolean;
  if (browser) {
    notification = Boolean(sessionStorage.getItem('notification') || true);
  }

  let notificationText =
    $page.data.notifications[
      Math.floor(Math.random() * $page.data.notifications.length)
    ];
</script>

<svelte:head>
  <meta name="theme-color" content="#3bd6cf" />

  <link rel="canonical" href={`https://cherrie.lat/`} />

  <meta name="author" content="Chérrie" />
  <meta name="publisher" content="Chérrie" />
  <meta name="copyright" content="Chérrie" />
  <meta name="robots" content="index, follow" />

  <link rel="icon" type="image/jpg" href="/favicon.jpg" sizes="16x16" />
</svelte:head>

{#if notification}
  <div
    class="flex items-center text-sm md:text-base justify-between bg-slate-900 text-white py-1 px-2 sm:px-16 md:px-20 xl:px-28"
  >
    <div />
    <p>
      {@html notificationText}
    </p>
    <button
      aria-label="Close main notification"
      type="button"
      on:click={() => {
        notification = false;
        sessionStorage.setItem('notification', 'false');
      }}><MdiClose /></button
    >
  </div>
{/if}
<div class="mx-2 sm:mx-16 md:mx-20 xl:mx-28">
  <Navbar />
  <slot />
</div>
<Footer />

<NotificationList
  class="left-20  z-50"
  position={Position.TopRight}
  let:notification
>
  <div
    class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg"
    >
      <MdiCheck />
      <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 font-medium">{notification.message}</div>
  </div>
</NotificationList>
