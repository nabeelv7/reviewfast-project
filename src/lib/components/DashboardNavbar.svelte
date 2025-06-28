<script lang="ts">
  import { page } from "$app/state";
  import UserDropdown from "./UserDropdown.svelte";

  // Get the current path
  const navItems = [
    { name: "General", path: "/dashboard/general" },
    { name: "Reviews", path: "/dashboard/reviews" },
    { name: "Theme", path: "/dashboard/theme" },
  ];

  let currentPath = $derived(page?.url?.pathname);
</script>

<nav
  class="bg-base-200 border border-white/20 px-5 py-3 flex items-center justify-between fixed top-3 left-1/2 -translate-x-1/2 max-w-lg md:w-lg w-[95%] rounded-full threed"
>
  <div class="flex gap-2">
    {#each navItems as item}
      <a
        href={item.path}
        class={`btn btn-sm ${currentPath === item.path ? "btn-primary" : "btn-ghost"}`}
      >
        {item.name}
      </a>
    {/each}
  </div>
  <UserDropdown />
</nav>
