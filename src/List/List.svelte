<script>
  import Card from "../Component/Card.svelte";

  let arr = new Array(12).fill(0);

  const onClick = () => {
    arr = [...arr, ...new Array(12).fill(0)];
  };
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  button {
    margin: 15px auto;
    padding: 15px 32px;
    border: 0px;
    border-radius: 10px;
    background-color: rgb(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.6);
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0);
  }
</style>

<div class="container">
  {#each arr as el, id}
    <Card id={id + 1} />
  {/each}
  <button on:click={onClick}>More...</button>
</div>
