<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="layout">
  <Sidebar />

  <main>
    <slot />
  </main>
</div>

<style>
.layout {
  display: flex;
}

main {
  flex: 1;
  padding: 2rem;
}
</style>
