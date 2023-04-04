<script>
    import AboutMe from "../components/AboutMe.svelte";
    import Header from "../components/Header.svelte";
</script>

<Header --ml="0%"></Header>
<div class="content-wrapper">
    <AboutMe></AboutMe>
</div>

<style>
    .content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
</style>
