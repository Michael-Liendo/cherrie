<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class={'p-6 bg-white border border-gray-200 rounded-lg ' + className}>
  <slot />
</div>
