<script>
    import SubSection from "./SubSection.svelte";
    export let title;
    export let description;

    export let sections = [];
    export let features = [];
</script>

<div class="card">
    <div class="card-title">
        <h1 class="card-title_text">{title}</h1>
        <hr class="card-title_bar">
    </div>
    <div class="card-body">
        <p class="card-description">{@html description}</p>
        {#each sections as {header, content}}
        <SubSection header={header} content={content}></SubSection>
        {/each}
    </div>
    <div class="card-features">
        <h2 class="card-features-title">Features:</h2>
        <ul class="card-features-ul">
            {#each features as feature}
            <li class="card-feature">{feature}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .card {
        background-color: rgb(185, 222, 245);
        border-radius: 3rem;
        width: 100%;
        min-height: 20vh;
        border: 1px solid white;
        padding: 2rem 1rem;
        margin-bottom: 5rem;
    }

    /* Title Styles */

    .card-title {
        margin: 0.5rem 0;
    }

    .card-title_text {
        font-size: 3rem;
    }

    .card-title_bar {
        border: none;
        border-top: 1px solid white;
        margin: 0.5 0;
    }

    /* Body Styles */

    .card-description {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    /* Features Styles */

    .card-features {
        margin: 1rem 0;
    }

    .card-features-ul {
        margin-left: 2rem;
        list-style-type: none;
    }

    .card-feature::before {
        content: '\2014';
        position: absolute;
        margin-left: -20px;
    }

</style>