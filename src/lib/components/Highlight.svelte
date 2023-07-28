<script lang="ts">
  export let highlight: {
    icon: ConstructorOfATypedSvelteComponent;
    title: string;
    description: string;
  };
  export let Icon = highlight.icon;
</script>

<div class="mt-5 w-80">
  <div>
    <button
      class="bg-slate-100 border border-slate-200 p-2.5 text-xl flex justify-center items-center rounded-lg"
    >
      <Icon />
    </button>
  </div>
  <h1 class="text-lg my-2 font-semibold">{highlight.title}</h1>
  <p class="font-light text-slate-500">{highlight.description}</p>
</div>
