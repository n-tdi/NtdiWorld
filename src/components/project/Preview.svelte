<script>
    export let title;
    export let body;
    export let link;
</script>

<div class="card">
    <h2 class="card-title">{title}</h2>
    <p class="card-body">{body}</p>

    <div class="card-bottom">
        <a href={link} class="card-link">
            <img class="card-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github Icon" />
        </a>
    </div>
</div>

<style>
    .card {
        display: inline-flex;
        border-radius: 10px;
        background-color: rgb(185, 222, 245);
        padding: 1.5rem;
        width: 18vw;
        flex-direction: column;
        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.114));
        margin: 0.515rem;
    }

    .card-title {
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px dotted gray;
        font-weight: 600;
    }

    .card-body {
        line-height: 145%;
    }

    .card-bottom {
        display: flex;
        justify-content: flex-end;    
        align-items: center;
    }

    .card-link {
        border-radius: 50%;
    }

    .card-icon {
        width: 25px;
        aspect-ratio: 1 / 1;
    }
</style>