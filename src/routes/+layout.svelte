<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
</script>

<div class="mx-2 sm:mx-16 md:mx-20 xl:mx-28">
  <Navbar />
  <slot />
</div>
<Footer />
