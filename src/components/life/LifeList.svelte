<script>
  import Card from "./Card.svelte";
  import { MasonryGrid, FrameGrid } from "@egjs/svelte-grid";

  export let lives = [];
</script>

<div class="container">
    {#each lives as life}
        <div class="live" style="height: {life.width}">
            <Card 
            file={life.title}
            body={life.body}
            />
        </div>
        {/each}
</div>

<style>
    .container {
        width: 67%;
        margin: 5rem auto;
        display: flex;
        flex-wrap: wrap;
    }

    .live {
        flex-grow: 1;
        width: auto;
    }
</style>