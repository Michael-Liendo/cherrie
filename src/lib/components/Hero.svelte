<script lang="ts">
  import Swiper from 'swiper';
  import 'swiper/css';

  import ChevronRight from '~icons/mdi/chevron-right';
  import ChevronLeft from '~icons/mdi/chevron-left';
  import type { HeroImages } from '$lib/types/sanity/Home';
  import { onMount } from 'svelte';

  export let images: HeroImages[] = [];

  let heroSwiper: Swiper;
  onMount(() => {
    heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: '7%',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: { delay: 2000 },
    });
  });
</script>

<div id="default-carousel" class="relative h-[50vh] 2xl:w-full">
  <!-- Carousel wrapper -->
  <div class="swiper hero-swiper w-full h-full">
    <div class="swiper-wrapper h-full w-full">
      {#each images as { src }, index}
        <img
          {src}
          class="swiper-slide rounded-lg w-full h-full object-cover"
          alt="..."
        />
      {/each}
    </div>
  </div>
  <div class="absolute z-10 flex top-5 divide-x-2 right-5">
    <button
      class="flex text-xl items-center p-3.5 bg-white rounded-l-xl"
      on:click={() => {
        heroSwiper.slidePrev();
      }}><ChevronLeft /></button
    >
    <button
      class="flex text-xl items-center p-3.5 bg-white rounded-r-xl"
      on:click={() => {
        heroSwiper.slideNext();
      }}><ChevronRight /></button
    >
  </div>
  <!-- Slider indicators -->
  <div class="absolute z-10 flex space-x-3 bottom-5 left-1/2">
    {#each images as _, index}
      <button
        type="button"
        class="w-3 h-3 bg-slate-200 rounded-full"
        on:click={() => heroSwiper.slideTo(index)}
      />
    {/each}
  </div>
</div>
