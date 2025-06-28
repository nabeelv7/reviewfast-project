<script>
  import { page } from "$app/state";
  import { signOut } from "@auth/sveltekit/client";
  import IconLogout from "./IconLogout.svelte";

  const user = page?.data?.session?.user;
</script>

<div class="dropdown dropdown-end">
  <button class="btn btn-ghost flex items-center gap-2">
    <div class="avatar">
      <div class="w-6 rounded-full">
        <img src={user?.image} alt="User Avatar" />
      </div>
    </div>
    <span class="font-medium max-md:hidden">{user?.name}</span>
  </button>

  <!-- dropdown -->
  <ul
    class="mt-3 p-2 flex flex-col dropdown-content rounded-box w-64 text-sm border border-white/20 bg-base-200"
  >
    <!-- user info in dropdown start -->
    <li class="mb-3">
      <div class="flex flex-col">
        <p class="font-semibold">{user?.name}</p>
        <p class="text-xs truncate">
          {user?.email}
        </p>
      </div>
    </li>
    <!-- links -->
    <li class="mb-1">
      <a href="/docs" class="justify-between btn btn-block"
        >Documentation <span>↗</span></a
      >
    </li>
    <li>
      <button
        onclick={() => signOut()}
        class="btn justify-between btn-block btn-error"
        >Logout
        <span><IconLogout width={14} /></span>
      </button>
    </li>
  </ul>
</div>
