<script>
  import Popup from "./Popup.svelte";
  export let title;
  export let body;

  let menuEnabled = false;

  const toggleMenu = () => {
    menuEnabled = !menuEnabled;
  }
</script>

<div on:click={toggleMenu} on:keypress={toggleMenu} class="folder-card">
  <div class="directory-side">
    <img src="/icons/folder-regular.svg" alt="Folder Icon" class="directory-icon">
  </div>
  <div class="directory-main">
    <h2 class="directory-title">{title}</h2>
  </div>
</div>

{#if menuEnabled}
  <div class="popup-background" on:click={toggleMenu} on:keypress={toggleMenu}>
    <div class="popup" on:click={(e) => {e.stopPropagation()}} on:keydown={(e) => {e.stopPropagation()}}>
      <Popup title={title} body={body} close={toggleMenu} />
    </div>
  </div>
{/if}

<style>
  .folder-card {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(185, 222, 245);
    border-radius: 10px;
    padding: 1.5rem;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.114));
    margin: 1rem;
    color: rgb(9, 47, 101);
    user-select: none;
    transition: all 0.2s ease-in-out;
  }

  .folder-card:hover {
    transform: translateY(-10px) scale(105%);
    cursor: pointer;
  }

  .directory-side {
    margin-right: 1.5rem;
  }

  .directory-icon {
    height: 2rem;
    filter: invert(14%) sepia(43%) saturate(2613%) hue-rotate(198deg) brightness(101%) contrast(102%);
  }

  .directory-main {
    margin-right: 0.5rem;
  }

  .directory-title {
    font-weight: 500;
  }

  .popup-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .popup-background:hover {
    cursor:zoom-out;
  }

  .popup {
    position: absolute;
    opacity: 1;
    top: 50svh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44%;
    z-index: 2;
  }

  .popup:hover {
    cursor: auto;
  }

  @media screen and (max-width: 1000px) {
    .popup {
      width: 80%;
    }
  }

  @media screen and (max-width: 750px) {
      .folder-card {
        margin: 1rem !important;
      }
  }

  @media screen and (max-width: 700px) {
    .folder-card {
      height: 50px !important;
      padding: 1rem !important;
      margin: 0.5rem !important;
    }
  }



  @media screen and (max-width: 600px) {
    .folder-card {
      height: 30px !important;
    }

    .directory-title {
      font-size: 1rem !important;
    }

    .directory-icon {
      height: 28px;
    }

    .popup {
      width: 90%;
    }
  }

  @media screen and (max-width: 400px) {
    .popup {
      width: 100%;
    }
  }
</style>