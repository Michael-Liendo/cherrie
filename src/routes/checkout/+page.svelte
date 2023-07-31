<script lang="ts">
  import MdiEmailOutline from '~icons/mdi/email-outline';
  import MdiAccountOutline from '~icons/mdi/account-outline';

  import { cart, clearCart } from '$lib/store/cart';

  function completeOrder() {
    clearCart();
  }

  $: cartTotal = $cart
    .reduce(
      (accumulator: number, product) =>
        accumulator + product.price * product.quantity,
      0
    )
    .toFixed(2);
</script>

<nav class="flex mt-5">
  <ol role="list" class="flex items-center">
    <li class="text-left">
      <div class="-m-1">
        <a
          href="/"
          class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
        >
          Inicio
        </a>
      </div>
    </li>

    <li class="text-left">
      <div class="flex items-center">
        <span class="mx-2 text-gray-400">/</span>
        <div class="-m-1">
          <a
            href="/checkout"
            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            Comprueba el carrito
          </a>
        </div>
      </div>
    </li>
  </ol>
</nav>

<div class=" grid lg:grid-cols-2">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Resumen del pedido</p>

    <div
      class="mt-8 space-y-3 rounded-lg overflow-y-scroll max-h-96 border bg-white px-2 py-4 sm:px-6"
    >
      {#each $cart as product}
        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img
            class="m-2 h-24 w-28 rounded-md border object-cover object-center"
            src={product.images[0]}
            width={122}
            height={96}
            alt={product.name}
          />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{product.name}</span>
            <p class="text-lg font-bold">${product.price}</p>
            <span>Cantidad: {product.quantity}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="rounded-lg bg-gray-100 px-4 pt-5 mb-5 lg:mt-0">
    <p class="text-xl font-medium">Detalles de compra</p>
    <p class="text-gray-400">Complete su pedido facilitando sus datos.</p>
    <div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">
        Nombre
      </label>
      <div class="relative">
        <input
          type="text"
          id="card-holder"
          name="card-holder"
          class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="John Doe"
        />
        <div
          class="pointer-events-none text-gray-400 absolute inset-y-0 left-0 inline-flex items-center px-3"
        >
          <MdiAccountOutline />
        </div>
      </div>

      <label for="email" class="mt-4 mb-2 block text-sm font-medium">
        Email
      </label>
      <div class="relative">
        <input
          type="text"
          id="email"
          name="email"
          class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="correo@ejemplo.com"
        />
        <div
          class="pointer-events-none text-gray-400 absolute inset-y-0 left-0 inline-flex items-center px-3"
        >
          <MdiEmailOutline />
        </div>
      </div>

      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">${cartTotal}</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">${cartTotal}</p>
      </div>
    </div>
    <button
      on:click={completeOrder}
      class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
    >
      Realizar pedido
    </button>
  </div>
</div>
