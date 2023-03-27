<script>
    export let file;
    export let body;
</script>

<div class="card">
    <h4 class="location">life/<em class="file">{file}</em></h4>
    <p class="body">{body}</p>
</div>

<style>
    .card {
        width: var(--card-width);
        background-color: rgb(185, 222, 245);
        border-radius: 10px;
        padding: 1.5rem;
        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.114));
        margin: 0.515rem;
        margin-bottom: 1rem;
    }

    .location {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-family: monospace;
    }

    .file {
        font-weight: 500;
        font-style: normal;
        font-family: monospace;
    }

    .body {
        margin-top: 1rem;
    }
</style>