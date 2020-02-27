<script>
  import Image from "./Image.svelte";
  import Description from "./Description.svelte";
  export let res;

  let isShowDescription = false;

  function onMouseOver() {
    isShowDescription = true;
    console.log("over");
  }

  function onMouseOut() {
    isShowDescription = false;
    console.log("out");
  }
</script>

<div on:mouseover={onMouseOver} on:mouseoot={onMouseOut}>
  <Image src={res.image.url} alt={res.image.url} />
  {#if isShowDescription}
    <Description />
  {/if}
</div>
