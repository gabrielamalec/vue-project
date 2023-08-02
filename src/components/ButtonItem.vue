<template>
    <li class="ul__li"><button class="ul__li__button" type="button"><slot></slot></button></li>
</template>

<style scoped>
    .ul__li {
        list-style: none;
        align-self: flex-end;
    }
    .ul__li__button {
        min-width: 80px;
        min-height: 44px;
        font: inherit;
        font-size: 18px;
        background-color: #f8f8f8;
        border-radius: 8px;
        border: none;
    }
    
  @media (min-width: 720px) {
      .ul__li {
          padding-right: 20px;
      }
  }

</style>