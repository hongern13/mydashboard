<script>
  let message = "Hello World!";
</script>

<section class="p-4">
  <h1>Welcome to SvelteKit</h1>
  <p>This is your homepage.</p>

  {#if message}
  <p id="message">{message}</p>
  {/if}
</section>

<style>
  #message {
    font-weight: bold;
  }
</style>
