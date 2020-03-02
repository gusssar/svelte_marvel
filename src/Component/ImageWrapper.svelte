<script>
  import Image from "./Image.svelte";
  import Description from "./Description.svelte";
  export let res;

  let isShowDescription = false;

  function onMouseOver() {
    isShowDescription = true;
  }

  function onMouseOut() {
    isShowDescription = false;
  }
</script>

<style>
  .image_wrapper {
    display: block;
    position: relative;
  }
</style>

<div class="image_wrapper" on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <Image src={res.image.url} alt={res.image.url} />
  <Description {isShowDescription} {res} />
</div>
