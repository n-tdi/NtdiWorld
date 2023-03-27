<script>
    export let header;
    export let content;
</script>

<div class="container">
    <h2 class="title">{header}</h2>
    <p class="body">{@html content}</p>
</div>

<style>
    .container {
        margin-bottom: 2rem;
    }

    .body {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        margin-left: 1rem;
    }

    .code {
        font-family: monospace;
        color: rgb(251, 74, 115);
        background-color: rgba(245, 245, 245, 0.072);
        border-radius: 0.5rem;
        font-style: normal;
    }
</style>