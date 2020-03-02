<script>
  export let isShowDescription, res;

  const _res = {
    name: res.name,
    work: res.work.occupation,
    alignment: res.biography.alignment
  };
</script>

<style>
  .card {
    height: 300px;
    width: 300px;
    border-radius: 15px;
  }
  .description {
    position: absolute;
    top: 0;
    left: 0;
    background-color: aqua;
    opacity: 0;
  }
  .visible {
    opacity: 0.8;
  }
</style>

<div class="card description {isShowDescription ? 'visible' : ''}">
  <p>{_res.name}</p>
  <p>{_res.work}</p>
  <p>{_res.alignment}</p>
</div>
