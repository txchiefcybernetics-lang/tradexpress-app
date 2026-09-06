<script lang="ts">
  import { modules } from "$lib/config/modules";
  import { page } from "$app/state";
</script>

<aside class="sidebar">
  <h2>TradeXpress</h2>

  <nav>
    {#each modules as module}
      <a
        href={"/" + module.id}
        class:active={page.url.pathname === "/" + module.id}
      >
        <span>{module.icon}</span>
        <span>{module.title}</span>
      </a>
    {/each}
  </nav>
</aside>

<style>
.sidebar {
  width: 260px;
  min-height: 100vh;
  background: #0f172a;
  color: white;
  padding: 1rem;
}

.sidebar h2 {
  margin-bottom: 1.5rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

a {
  display: flex;
  gap: .75rem;
  padding: .75rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
}

a:hover {
  background: #1e293b;
}

.active {
  background: #2563eb;
}
</style>
