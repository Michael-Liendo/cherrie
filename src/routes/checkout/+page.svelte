<script lang="ts">
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';
  import MdiAccountOutline from '~icons/mdi/account-outline';

  import { cart, clearCart } from '$lib/store/cart';

  let customerName = '';
  let customerPayment = '';

  $: cartTotal = $cart
    .reduce(
      (accumulator: number, product) =>
        accumulator + product.price * product.quantity,
      0
    )
    .toFixed(2);

  $: cartItemsTotal = $cart.reduce(
    (accumulator: number, product) => accumulator + product.quantity,
    0
  );

  const { handleSubmit, values, errors } = newForm({
    initialValues: {
      name: '',
      payment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      payment: Yup.string().required('Tipo de pago es requerido'),
    }),
    onSubmit(values, helpers) {
      window.location.href = `https://wa.me/584149409930?text=*Nombre:* ${customerName}%0A*Método Pago:* ${customerPayment}%0A*PRODUCTOS:*%0A${$cart
        .map(
          (item) =>
            `Nombre: ${item.name} - $${item.price} - Cantidad: ${item.quantity}%0A - SLUG: ${item.slug}`
        )
        .join(', ')}%0A*TOTAL:* $${cartTotal}`;
      clearCart();
    },
  });
</script>

<svelte:head>
  <title>Realizar pedido - Sarteza</title>
  <meta name="description" content="Realiza el pedido ahora en Sarteza" />
</svelte:head>

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

<div class="min-h-screen grid lg:grid-cols-2">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Resumen del pedido</p>

    <div
      class="mt-8 space-y-3 rounded-lg overflow-y-scroll h-[38vh] border bg-white px-2 py-4 sm:px-6"
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
  <form
    on:submit={handleSubmit}
    class="rounded-lg h-fit bg-gray-100 px-4 pt-5 my-5 lg:mt-0"
  >
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
          bind:value={$values.name}
        />
        <div
          class="pointer-events-none text-gray-400 absolute inset-y-0 left-0 inline-flex items-center px-3"
        >
          <MdiAccountOutline />
        </div>
      </div>
      {#if $errors.name}
        <p class="text-sm font-medium text-red-600">{$errors.name}</p>
      {/if}

      <label
        for="countries"
        class="block mt-4 mb-2 text-sm font-medium text-gray-900"
        >Selecciona un método de pago</label
      >
      <select
        bind:value={$values.payment}
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" selected disabled hidden
          >Selecciona un método de pago</option
        >
        <option value="pago-movil">Pago Móvil</option>
        <option value="transferencia">Transferencia bancaria</option>
        <option value="zinli">Zinli</option>
      </select>
      {#if $errors.payment}
        <p class="text-sm font-medium text-red-600">{$errors.payment}</p>
      {/if}

      <!-- <label for="email" class="mt-4 mb-2 block text-sm font-medium">
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
      </div> -->

      <div class="mt-6 border-t py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Cantidad de productos</p>
          <p class="font-semibold text-gray-900">{cartItemsTotal}</p>
        </div>
      </div>
      <div class="border-t border-b py-2">
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
      type="submit"
      class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
    >
      Realizar pedido
    </button>
  </form>
</div>
