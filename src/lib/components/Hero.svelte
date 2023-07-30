<script lang="ts">
  import ChevronRight from '~icons/mdi/chevron-right';
  import ChevronLeft from '~icons/mdi/chevron-left';

  export let images: HeroImages[] = [];
  let imageIndex = 0;

  function nextImage() {
    if (imageIndex == images.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
  }

  function preImage() {
    if (imageIndex == 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex -= 1;
    }
  }

  setInterval(() => {
    nextImage();
  }, 5000);
</script>

<div id="default-carousel" class="relative h-[50vh] 2xl:w-full">
  <!-- Carousel wrapper -->
  <div class="relative overflow-hidden rounded-lg h-full w-full">
    {#each images as { url: src }, index}
      <!-- Item 1 -->
      <div
        class="transition-opacity duration-700 ease-in-out"
        class:opacity-0={index == imageIndex}
      >
        <img
          {src}
          class="absolute block w-full h-full object-cover"
          alt="..."
        />
      </div>
    {/each}
  </div>
  <div class="absolute flex top-5 divide-x-2 right-5">
    <button
      class="flex text-xl items-center p-3.5 bg-white rounded-l-xl"
      on:click={preImage}><ChevronLeft /></button
    >
    <button
      class="flex text-xl items-center p-3.5 bg-white rounded-r-xl"
      on:click={nextImage}><ChevronRight /></button
    >
  </div>
  <!-- Slider indicators -->
  <div class="absolute flex space-x-3 bottom-5 left-1/2">
    {#each images as _, index}
      <button
        type="button"
        class="w-3 h-3 bg-slate-200 rounded-full"
        class:!bg-slate-50={index == imageIndex}
        on:click={() => (imageIndex = index)}
      />
    {/each}
  </div>
</div>
