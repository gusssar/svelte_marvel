<script>
  export let id;
  let promise = fetch(
    "https://www.superheroapi.com/api.php/2304427089625919/" + id,
    { mode: "cors" }
  )
    .then(res => res.json())
    .then(res => res.image.url)
    .catch(err => console.log("--Error--", err));
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

<div>
  {#await promise}
    <div class="card skeleton" />
  {:then c}
    {#if c}
      <img class="card image" src={c} alt="batman" />
    {:else}
      <div class="card no_image" />
    {/if}
  {:catch error}
    <div class="card error" />
  {/await}
</div>
