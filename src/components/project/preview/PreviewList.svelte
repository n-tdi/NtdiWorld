<script>
    import Preview from "./Preview.svelte";

    export let previews = [];
</script>

<div class="preview-container">
    <div class="previews">
        {#each previews as {id, title, description, github_link}}
        <div class="preview">
            <Preview id={id} title={title} body={description} link={github_link}/>
        </div>
        {/each}
    </div>
</div>

<style>
    .preview-container {
        width: 67%;
        margin: 0 auto;
    }

    .previews {
        column-count: 3;
        column-gap: 1rem;
    }

    .preview {
        transition: all 0.2s ease-in-out;
        margin-bottom: 1rem;
    }

    .preview:hover {
        transform: translateY(-10px) scale(105%);
        cursor: pointer;
    }
</style>