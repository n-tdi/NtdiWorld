<script>
    export let header;
    export let content;
</script>

<h2 class="title">{header}</h2>
<p class="body">{@html content}</p>

<style>
    .body {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    .code {
        font-family: monospace;
        color: rgb(251, 74, 115);
        background-color: rgba(245, 245, 245, 0.072);
        border-radius: 0.5rem;
        font-style: normal;
    }
</style>