<script>
    import AboutMe from "../components/AboutMe.svelte";
    import Header from "../components/Header.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

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
