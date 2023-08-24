<script lang="ts">
  import MdiArrowRight from '~icons/mdi/arrow-right';
  import type { Collection } from '$lib/types/sanity/Home';

  export let collection: Collection;
</script>

<div class="relative w-full md:w-80 h-80 flex justify-center">
  <img
    src={collection.src}
    alt={collection.name}
    class="object-cover rounded-lg w-full h-full"
  />
  <a
    href={`/collections/${collection._id}`}
    class="flex items-center justify-between w-3/4 text-lg p-3.5 bg-white rounded-lg absolute bottom-4"
    >{collection.name} <MdiArrowRight /></a
  >
</div>
