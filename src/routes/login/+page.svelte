<script>
  import ButtonGithub from "$lib/components/ButtonGithub.svelte";
  import IconStar from "$lib/components/IconStar.svelte";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<main class="w-full min-h-screen flex">
  <!-- left container -->
  <div class="md:flex hidden left md:w-1/2 min-h-full"></div>
  <!-- right container -->
  <div
    class="md:w-1/2 w-full min-h-full flex flex-col gap-4 justify-center items-center md:px-10 px-3"
  >
    <!-- card start -->
    <div class="card threed border border-white/20 bg-base-200 p-5 flex flex-col gap-4 sm:max-w-sm w-full">
      <div class="flex justify-center items-center gap-2">
        <IconStar width={24}/>
        <h1 class="text-xl font-bold">ReviewFast</h1>
      </div>
      <ButtonGithub />
      <!-- legal note div -->
    </div>
    <!-- card end -->
    <div class="text-center text-sm opacity-80 sm:max-w-sm w-full">
      By continuing, you agree to our <a class="hover:link" href="/tos"
        >Terms of Service</a
      >
      and <a class="hover:link" href="/privacy-policy">Privacy Policy</a>.
    </div>
  </div>
</main>

<style>
  .left {
    background: url("/bigsur.jpg");
    background-position: center;
  }
</style>
