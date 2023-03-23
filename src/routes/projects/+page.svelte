<script>
  import Header from "../../components/Header.svelte";
  import PreviewList from "../../components/project/PreviewList.svelte";

  export let data;
  const { previews } = data;
</script>

<Header --ml="32.9%"></Header>
<div class="content-container">
    <PreviewList previews={previews}></PreviewList>
</div>

<style>

</style>