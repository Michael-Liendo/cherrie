<script lang="ts">
  import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';

  import ChevronRight from '~icons/mdi/chevron-right';
  import ChevronLeft from '~icons/mdi/chevron-left';
  import type { HeroImages } from '$lib/types/sanity/Home';
  import { onMount } from 'svelte';

  export let images: HeroImages[] = [];

  let heroSwiper: Swiper;
  onMount(() => {
    heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: '7%',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
    });
  });
</script>

<div id="default-carousel" class="relative h-[60vh] 2xl:w-full">
  <!-- Carousel wrapper -->
  <div class="swiper hero-swiper w-full h-full">
    <div class="swiper-wrapper h-full w-full">
      {#each images as { src, title, button }}
        <section
          class="relative h-full w-full flex justify-center items-center"
        >
          <img
            {src}
            class="swiper-slide rounded-lg w-full h-full object-cover"
            alt="..."
          />
          <h1 class="absolute mx-2 text-5xl xl:text-7xl text-white">{title}</h1>
          <a
            class="absolute bottom-10 text-black bg-white text-xl px-10 py-3 rounded-lg"
            href={button.url}>{button.name}</a
          >
        </section>
      {/each}
    </div>
    <div class="swiper-pagination z-20" />
  </div>
  <div class="absolute z-10 flex top-5 divide-x-2 right-5">
    <button
      type="button"
      aria-label="Previous image on slider"
      class="flex text-xl items-center p-3.5 bg-white rounded-l-xl"
      on:click={() => {
        heroSwiper.slidePrev();
      }}><ChevronLeft /></button
    >
    <button
      type="button"
      aria-label="Next image on slider"
      class="flex text-xl items-center p-3.5 bg-white rounded-r-xl"
      on:click={() => {
        heroSwiper.slideNext();
      }}><ChevronRight /></button
    >
  </div>
</div>
