<script>
  import "../app.css";

  let { data, children } = $props();
  console.log("USER", data?.session?.user);
</script>

{@render children()}
