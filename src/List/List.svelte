<script>
  import Card from "../Component/Card.svelte";

  const arr = new Array(10).fill(0);
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="container">
  {#each arr as el, id}
    <Card id={id + 1} />
  {/each}
</div>
