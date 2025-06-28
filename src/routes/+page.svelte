<script>
  let { data } = $props();
</script>

<main class="flex gap-3 flex-col justify-center items-center min-h-screen">
  <h1>Welcome to ReviewFast! 👋</h1>
  {#if data?.session?.user}
    <a href="/dashboard" class="btn btn-primary">Go to Dashboard</a>
  {:else}
    <a href="/login" class="btn">Login</a>
  {/if}
</main>
