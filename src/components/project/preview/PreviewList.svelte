<script>
    import Preview from "./Preview.svelte";
    import { MasonryGrid } from "@egjs/svelte-grid";

    export let previews = [];
</script>

<div class="preview-container">
    <MasonryGrid>
        {#each previews as {id, title, description, github_link}}
        <div class="preview">
            <Preview id={id} title={title} body={description} link={github_link}/>
        </div>
        {/each}
    </MasonryGrid>
</div>

<style>
    .preview-container {
        width: 67%;
        margin: 5rem auto;
    }

    .preview {
        transition: all 0.2s ease-in-out;
        margin-bottom: 1rem;
        width: 33%;
    }

    .preview:hover {
        transform: translateY(-10px) scale(105%);
        cursor: pointer;
    }
</style>