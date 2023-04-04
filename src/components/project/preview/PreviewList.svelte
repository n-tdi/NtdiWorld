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
        margin: 0 auto;
        margin-bottom: 5rem;
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

    @media screen and (max-width: 1200px) {
      .preview {
        width: 50% !important;
        margin-bottom: 0.5rem !important;
      }

      .preview-container {
        width: 89% !important;
      }
    }

    @media screen and (max-width: 800px) {
      .preview {
        width: 100% !important;
        margin-bottom: 0.5rem !important;
      }

      .preview-container {
        width: 89% !important;
      }
    }

    @media screen and (max-width: 400px) {
      .preview {
        width: 100% !important;
        margin-bottom: 0.5rem !important;
      }

      .preview-container {
        width: 90% !important;
      }
    }

    @media screen and (max-width: 300px) {
      .preview {
        width: 100% !important;
        margin-bottom: 0.5rem !important;
      }

      .preview-container {
        width: 100% !important;
      }
    }
</style>