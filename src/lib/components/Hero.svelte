<script lang="ts">
  const images = [
    'https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0',
    'https://images.unsplash.com/photo-1509923261489-fd580b2d9051',
  ];
  let imageIndex = 0;

  setInterval(() => {
    if (imageIndex == images.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
  }, 3000);
</script>

<div id="default-carousel" class="relative h-[50vh] w-full">
  <!-- Carousel wrapper -->
  <div class="relative overflow-hidden rounded-lg h-full">
    {#each images as src, index}
      <!-- Item 1 -->
      <div class="duration-700 ease-in-out">
        <img
          {src}
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          class:hidden={imageIndex !== index}
          alt="..."
        />
      </div>
    {/each}
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
