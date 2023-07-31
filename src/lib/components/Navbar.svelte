<script lang="ts">
  import Cart from '~icons/mdi/cart-outline';
  import Profile from '~icons/mdi/account-outline';
  import Chevron from '~icons/mdi/chevron-down';
  import MdiMenu from '~icons/mdi/menu';
  import MdiMenuClose from '~icons/mdi/menu-close';

  import { cart } from '$lib/store/cart';

  import TextField from './TextField.svelte';
  import { clickOutside } from '$lib/actions/click-outside';
  import ProductCart from './ProductCart.svelte';

  let menuDropdownIsOpen = false;
  let shopDropdownIsOpen = false;
  let cartIsOpen = false;

  $: cartTotal = $cart.reduce(
    (accumulator: number, product) =>
      accumulator + product.price * product.quantity,
    0
  );

  $: cartItemsTotal = $cart.reduce(
    (accumulator: number, product) => accumulator + product.quantity,
    0
  );
</script>

<nav class="flex justify-between items-center py-4">
  <h1 class="text-2xl mx-2 md:mx-0"><a href="/">STORE</a></h1>
  <ul
    class="hidden md:flex md:space-x-4 lg:space-x-10 font-semibold text-gray-700"
  >
    <li class="relative hover:text-gray-600">
      <button
        class="flex items-center"
        on:click={() => (shopDropdownIsOpen = !shopDropdownIsOpen)}
        >Shop <Chevron /></button
      >
      {#if shopDropdownIsOpen}
        <div
          use:clickOutside
          on:clickOutside={() => (shopDropdownIsOpen = !shopDropdownIsOpen)}
          id="dropdown"
          class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            class="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a href="/#" class="block px-4 py-2 hover:bg-gray-100">Shoes</a>
            </li>
          </ul>
        </div>
      {/if}
    </li>
    <li class="hover:text-gray-600"><a href="http://">Most wanted</a></li>
    <li class="hover:text-gray-600"><a href="http://">New arrival</a></li>
    <li class="hover:text-gray-600"><a href="http://">Brands</a></li>
  </ul>
  <div class="flex space-x-5 items-center">
    <TextField name="search" type="search" />
    <div class="relative">
      <button
        on:click={() => {
          cartIsOpen = !cartIsOpen;
        }}
        aria-label="Cart"
        class="relative text-gray-700 text-lg"
      >
        {#if $cart.length > 0}
          <span
            class="absolute -top-2.5 left-1 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
          >
            {$cart.length}
          </span>
        {/if}
        <Cart />
      </button>
      {#if cartIsOpen}
        <div
          class="w-80 fixed sm:absolute z-20 p-6 -right-0 bg-white border border-gray-200 rounded-lg"
          use:clickOutside
          on:clickOutside={() => {
            cartIsOpen = !cartIsOpen;
          }}
        >
          {#each $cart as product}
            <ProductCart {product} />
          {:else}
            <span>There are no products in the cart</span>
          {/each}
          {#if $cart.length > 0}
            <hr />
            <div class="mt-3 flex justify-between items-center">
              <div class=" flex flex-col">
                <span class="text-xs">
                  {cartItemsTotal} item{cartItemsTotal === 1 ? '' : 's'}
                </span>
                <span class="font-medium mt-1">
                  ${cartTotal < 1 ? '0.00' : cartTotal.toFixed(2)}
                </span>
              </div>
              <a
                href="/checkout"
                class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Comprar
              </a>
            </div>
          {/if}
        </div>
      {/if}
    </div>
    <!-- <span class="hidden md:block text-gray-700 text-xl">
      <Profile />
    </span> -->
    <button
      on:click={() => {
        menuDropdownIsOpen = !menuDropdownIsOpen;
      }}
      class="block md:hidden text-xl"
      >{#if !menuDropdownIsOpen}
        <MdiMenu />
      {:else}
        <MdiMenuClose />
      {/if}</button
    >
    <div class="relative">
      {#if menuDropdownIsOpen}
        <div
          class="w-48 absolute p-6 divide-y-2 -right-0 z-20 bg-white border border-gray-200 rounded-lg"
          use:clickOutside
          on:clickOutside={() => {
            menuDropdownIsOpen = !menuDropdownIsOpen;
          }}
        >
          <ul class="space-y-4 font-semibold text-gray-700">
            <li class="relative hover:text-gray-600">
              <button
                class="flex items-center"
                on:click={() => (shopDropdownIsOpen = !shopDropdownIsOpen)}
                >Shop <Chevron /></button
              >
              {#if shopDropdownIsOpen}
                <div
                  use:clickOutside
                  on:clickOutside={() =>
                    (shopDropdownIsOpen = !shopDropdownIsOpen)}
                  id="dropdown"
                  class="z-10 -right-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a href="/#" class="block px-4 py-2 hover:bg-gray-100"
                        >Shoes</a
                      >
                    </li>
                  </ul>
                </div>
              {/if}
            </li>
            <li class="hover:text-gray-600">
              <a href="http://">Most wanted</a>
            </li>
            <li class="hover:text-gray-600">
              <a href="http://">New arrival</a>
            </li>
            <li class="hover:text-gray-600"><a href="http://">Brands</a></li>
            <!-- <hr />
            <li class="hover:text-gray-600">
              <a href="http://">Profile</a>
            </li> -->
          </ul>
        </div>
      {/if}
    </div>
  </div>
</nav>
