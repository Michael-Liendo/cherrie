<script lang="ts">
  import Search from '~icons/mdi/search';

  export let type: 'text' | 'number' | 'email' | 'password' | 'search' = 'text';
  export let name: string;
  export let id = name;
  export let error: string | null = null;
  export let value: string | null = null;
  export let label: string | null = null;
  export let placeholder: string | undefined = undefined;
  export let required = false;
  export let autocomplete: 'true' | 'false' | undefined = undefined;
  export { customClassNames as class };

  let customClassNames = '';

  let viewPassword: boolean;
  function changeInputView() {
    viewPassword = !viewPassword;
  }

  const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    value = target.value;
  };
</script>

{#if label}
  <label for={id} class="block mb-2 font-medium">{label}</label>
{/if}

{#if type == 'search'}
  <div class="flex">
    <label
      for={id}
      class="inline-flex items-center pl-3 text-lg text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md"
    >
      <Search />
    </label>
    <input
      {name}
      {id}
      {placeholder}
      {required}
      {autocomplete}
      {type}
      {value}
      class:rounded-none={type}
      class:rounded-r-lg={type}
      class:bg-gray-700={error}
      class:border-red-500={error}
      class:text-red-900={error}
      class:placeholder-red-500={error}
      class:focus:ring-red-500={error}
      class:focus:border-red-500={error}
      class={'bg-gray-50 border-l-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5' +
        customClassNames}
      on:change
      on:blur
      on:focus
      on:input={handleInput}
    />
  </div>
{:else}
  <input
    {name}
    {id}
    {placeholder}
    {required}
    {autocomplete}
    {type}
    {value}
    class:bg-gray-700={error}
    class:border-red-500={error}
    class:text-red-900={error}
    class:placeholder-red-500={error}
    class:focus:ring-red-500={error}
    class:focus:border-red-500={error}
    class={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' +
      customClassNames}
    on:change
    on:blur
    on:focus
    on:input={handleInput}
  />
{/if}

{#if error}
  <p class="mt-0.5 text-sm text-red-500 fixed">
    {error}
  </p>
{/if}
