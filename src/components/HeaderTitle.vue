<template>
    <h1 class="header__title"><slot /></h1>
</template>

<style>
    header {
        line-height: 1.5;
        background-color: #555;
    }

    .header__title {
      color: #f8f8f8;
      font-size: 36px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      padding: 15px 15px 0 15px;
    }

    @media (min-width: 720px) {
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 720px;
      }

      .header__title {
        padding-bottom: 15px;
      }
    }

    @media (min-width: 1200px) {
      header {
          margin: 0;
          flex-direction: column;
          align-items: center;
          width: auto;
          height: 100vh;
          position: fixed;
          left: 0;
      }
      
      h1 {
          writing-mode: vertical-rl;
          text-orientation: upright;
          letter-spacing: -8px;
      }

      .header__title {
          padding: 10px 0; 
      }
}

</style>