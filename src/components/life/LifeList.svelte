<script>
  import Card from "./Card.svelte";
  import { MasonryGrid, FrameGrid } from "@egjs/svelte-grid";
  import DirectoryPreview from "./DirectoryPreview.svelte";

  export let lives = [];
</script>

<div class="container">
    <div class="layout">
      {#each lives as life}
          <div class="lay">
              <DirectoryPreview title={life.title} body={life.body} />
          </div>
      {/each}
    </div>
</div>

<style>
    .container {
        width: 67%;
        margin: 0 auto;
        margin-bottom: 5rem;
        display: flex;
        flex-wrap: wrap;
    }
    
    .layout {
      display: flex;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 1000px) {
      .container {
        margin-bottom: 1rem !important;
        width: 85% !important;
      }
    }
</style>