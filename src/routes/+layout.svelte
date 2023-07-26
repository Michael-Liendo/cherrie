<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
</script>

<div class="mx-16">
  <Navbar />
  <slot />
</div>
