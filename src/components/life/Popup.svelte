<script>
  export let title;
  export let body;
  export let close;
</script>

<div class="popup">
  <div class="top">
    <div class="title-container">
      <img src="/icons/folder-open-regular.svg" alt="Folder Open Icon" class="open-icon blue">
      <h1 class="title">{title}</h1>
    </div>
    <img on:click={close} on:keydown={close} src="/icons/xmark-solid.svg" alt="" class="close-icon blue">
  </div>
  <p class="body">{body}</p>
</div>

<style>
  .popup {
    background-color: rgb(185, 222, 245);
    border-radius: 10px;
    padding: 1.5rem;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.114));
    margin: 1rem;
    color: rgb(9, 47, 101);
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    animation: scaleinto 0.2s ease-in-out 1 alternate;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .open-icon {
    height: 32px;
    margin-right: 1rem;
  }

  .close-icon {
    height: 32px;
  }

  .close-icon:hover {
    cursor: pointer;
  }

  .blue {
    filter: invert(14%) sepia(43%) saturate(2613%) hue-rotate(198deg) brightness(101%) contrast(102%);
  }

  .body {
    letter-spacing: 2px;
    word-spacing: 5px;
  }

  @keyframes scaleinto {
    0% {
        transform: scale(70%);
    }
    100% {
        transform: scale(100%);
    }
  }

  @keyframes scaleout {
    0% {
        transform: scale(100%);
    }
    100% {
        transform: scale(70%);
    }
  }

  @media screen and (max-width: 500px) {
      .top {
        font-size: 0.7rem !important;
      }

      .open-icon {
        height: 20px;
        margin-right: 0.2rem !important;
      }
  }
</style>