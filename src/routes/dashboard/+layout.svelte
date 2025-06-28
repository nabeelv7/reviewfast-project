<script>
  import DashboardNavbar from '$lib/components/DashboardNavbar.svelte';

  /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
  let { data, children } = $props();
</script>

<DashboardNavbar />
{@render children()}
