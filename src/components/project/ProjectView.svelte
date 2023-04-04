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
        border-radius: 1rem;
        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.114));
        min-height: 20vh;
        padding: 2rem 3rem;
        margin-bottom: 5rem;
    }

    /* Title Styles */

    .card-title {
        margin: 0.5rem 0;
    }

    .card-title_text {
        font-size: 2.8rem;
    }


    /* Body Styles */

    .card-description {
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }

    /* Features Styles */

    .card-features-title {
        margin-bottom: 0.5rem;
    }

    .card-features-ul {
        margin-left: 2rem;
        /* list-style-type: none; */
        list-style-type:square;
        font-size: 1.2rem;
    }

    /* .card-feature::before {
        content: '\2014';
        position: absolute;
        margin-left: -20px;
    } */
</style>