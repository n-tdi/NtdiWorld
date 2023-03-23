<script>
    export let ml = `0%`;
</script>

<header>
    <div class="header-container">
        <ul>
            <li class="one"><a href="/">About</a></li>
            <li class="two"><a href="/projects">Projects</a></li>
            <li class="three"><a href="/">Blog</a></li>
            <hr />
        </ul>
    </div>
</header>

<style>
    * {
        box-sizing: border-box;
    }
    header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 2rem 0;
    }

    .header-container {
        width: 50%;
        margin: 0 auto;
    }

    ul li {
        display: inline;
        text-align: center;
    }

    a {
        display: inline-block;
        width: 32.9%;
        padding: .75rem 0;
        margin: 0;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.3rem;
        color: rgb(29, 112, 186);
    }

    .one:hover ~ hr {
        margin-left: 0; 
    }

    .two:hover ~ hr {
        margin-left: 32.9%;
    }

    .three:hover ~ hr {
        margin-left: 65.8%;
    }

    hr {
        height: .25rem;
        width: 33%;
        margin: 0;
        background: rgb(29, 112, 186);
        border: none;
        transition: .3s ease-in-out;
        margin-left: var(--ml);
    }
</style>