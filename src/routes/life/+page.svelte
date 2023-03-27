<script>
    import Header from "../../components/Header.svelte";
    import LifeList from "../../components/life/LifeList.svelte";

    export let data;
    const { lives } = data;
</script>

<Header --ml="65.8%"></Header>
<LifeList lives={lives}></LifeList>

<style>

</style>