<div class="about-content">
    <div class="about-card" >
        <div class="profile">
            <img src="/YogiKing-nobg.png" alt="" class="profile-img">
        </div>
        <div class="side-content">
            <div class="text">
                <h1 class="title-text">Hey, I'm <em class="text-em">Ntdi</em></h1>
                <p class="title-desc">I'm a developer interested in Java programming and computational theory.</p>
            </div>
            <div class="languages">
                <img class="language-icon" src="/icons/java-original.svg" alt="Java Icon" />
                <img class="language-icon" src="/icons/postgresql-original.svg" alt="Postgresql Icon" />
                <img class="language-icon" src="/icons/spring-original.svg" alt="Spring Boot Icon" />  
                <img class="language-icon" src="/icons/javascript-original.svg" alt="Javascript Icon"/>
                <img class="language-icon" src="/icons/svelte-original.svg" alt="Svelte Icon"/>
                <img class="language-icon" src="/icons/react-original.svg" alt="React Icon"/>    
                <img class="language-icon" src="/icons/sass-original.svg" alt="Sass Icon" />
                <img class="language-icon" src="/icons/mysql-original-wordmark.svg" alt="MySQL Icon"/>
                <img class="language-icon" src="/icons/python-original.svg" alt="Python Icon"/>
                <img class="language-icon" src="/icons/rust-plain.svg" alt="Rust Icon" />
                <img class="language-icon" src="/icons/csharp-original.svg" alt="C# Icon" />
                <img class="language-icon" src="/icons/dotnetcore-original.svg" alt=".NET Icon"/>    
                <img class="language-icon" src="/icons/cplusplus-original.svg" alt="C++ Icon" />   
                <img class="language-icon" src="/icons/swift-original.svg" alt="Swift Icon"/>    
                <img class="language-icon" src="/icons/lua-original-wordmark.svg" alt="Lua Icon"/>     
                <img class="language-icon" src="/icons/firebase-plain.svg" alt="Firebase Icon" />  
                <img class="language-icon" src="/icons/redis-original.svg" alt="Redis Icon" />
                <img class="language-icon" src="/icons/sqlite-original.svg" alt="SQLite Icon"/>    
                <img class="language-icon" src="/icons/tensorflow-original.svg" alt="Tensorflow Icon" />
                <img class="language-icon" src="/icons/bash-original.svg" alt="Bash Icon" />      
                <img class="language-icon" src="/icons/git-original.svg" alt="Git Icon" />
            </div>
        </div>
    </div>
</div>

<style>
    .about-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 2rem;
        border-radius: 20rem;
        background: rgb(196, 230, 251);
        border: solid 1px white;
        width: 75vw;
    }

    .profile-img {
        height: 400px;
        aspect-ratio: auto;
        border-radius: 40%;
        margin-right: 2rem;
    }

    .side-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title-text {
        margin-bottom: 1rem;
        font-size: 3rem;
    }

    .text-em {
        font-size: 3.5rem;
        color: rgb(29, 112, 186);
    }

    .title-desc {
        font-size: 1.3rem;
        width: 77%;
        margin-bottom: 1rem;
    }

    .languages {
        width: 70%;
        margin-top: 1rem;
    }

    .language-icon {
        height: 50px;
        aspect-ratio: auto;
        /* background-color: rgba(0, 0, 0, 0.05); */
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 1200px) {
      .profile-img {
        height: 200px !important; 
      }

      .title-text {
        font-size: 2rem !important;
      }

      .text-em {
        font-size: 2.5rem !important;
      }

      .language-icon {
        height: 35px !important;
      }
    }

    @media screen and (max-width: 750px) {
      .about-card {
        width: 89svw !important;
      }

      .profile-img {
        height: 200px !important; 
        margin-right: 0.5rem !important;
      }

      .title-text {
        font-size: 1.5rem !important;
      }

      .text-em {
        font-size: 1.7rem !important;
      }
    }

    @media screen and (max-width: 750px) {
      .about-card {
        width: 89svw !important;
        flex-direction: column;
      }

      .side-content {
        justify-content: center !important;
        align-items: center !important;
      }

      .text {
        justify-content: center !important;
        align-items: center !important;
      }

      .profile-img {
        height: 150px !important; 
        margin-right: 0.5rem !important;
      }

      .title-text {
        font-size: 1rem !important;
      }

      .text-em {
        font-size: 1.2rem !important;
      }

      .title-desc {
        font-size: 1rem !important;
      }

      .languages {
        width: 50% !important;
      }
    }

    @media screen and (max-width: 750px) {
      .about-card {
        margin-top: 3rem !important;
        width: 78svw !important;
      }
      .languages {
        width: 65% !important;
      }
    }
</style>