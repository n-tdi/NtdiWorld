<script>
    import Preview from "./Preview.svelte";

    export let previews = [];
</script>

<div class="preview-container">
    <div class="previews">
        {#each previews as {title, description, github_link}}
        <div class="preview">
            <Preview title={title} body={description} link={github_link}/>
        </div>
        {/each}
    </div>
</div>

<style>
    .preview-container {
        width: 67%;
        margin: 0 auto;
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem; */
        /* column-count: 3;
        column-gap: 1.2rem; */
    }

    .previews {
        /* display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        align-items: start; */
        box-sizing: border-box;
        column-count: 3;
        column-gap: 2rem;
        margin: 1rem;
    }
</style>