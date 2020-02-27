<script>
  export let src, alt;
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
</style>

<img
  class="card image"
  on:error={e => {
    e.target.src = '/img/nia.png';
  }}
  src={'/img/nia.png'}
  {alt} />
