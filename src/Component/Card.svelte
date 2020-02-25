<script>
  import { fetchRetry } from "../utils/helpers";
  export let id;

  let promise = fetchRetry(
    "https://www.superheroapi.com/api.php/2304427089625919/" + id
  );
</script>

<style>
  .card {
    height: 300px;
    width: 300px;
    border-radius: 15px;
  }
  .image {
    object-fit: cover;
  }
  .skeleton {
    background-color: rgb(140, 140, 140);
    animation: opacity1 2s ease-in-out infinite;
  }
  .error {
    background-color: red;
  }
  .no_image {
    background-color: rgb(160, 160, 160);
  }

  @keyframes opacity1 {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>

<div class="card">
  {#await promise}
    <div class="card skeleton" />
  {:then res}
    {#if res.image}
      <img class="card image" src={res.image.url} alt={res.image.url} />
    {:else}
      <div class="card no_image" />
    {/if}
  {:catch error}
    <div class="card error" />
  {/await}
</div>
