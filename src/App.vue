<script setup>
import ButtonItem from './components/ButtonItem.vue'
import ImageBeach from './components/ImageBeach.vue'
import SectionImages from './components/SectionImages.vue'
import HeaderTitle from './components/HeaderTitle.vue'
</script>

<template>
  <header>
    <HeaderTitle>LOGO TEXT</HeaderTitle>
    <ul class="list_buttons">
      <li class="ul__li"><ButtonItem>button 1</ButtonItem></li>
      <li class="ul__li"><ButtonItem>button 2</ButtonItem></li>
      <li class="ul__li"><ButtonItem class="ul__li--button3">button 3</ButtonItem></li>
    </ul>
  </header>

  <main>
    <SectionImages>
      <ImageBeach class="cent-1"></ImageBeach>
      <ImageBeach class="cent-2"></ImageBeach>
    </SectionImages>
  </main>
</template>

<style>
  .ul__li {
        list-style: none;
        align-self: flex-end;
    }

  .list_buttons {
    display: flex;
    justify-content: space-around;
    padding: 10px 17px 10px 10px;
    }

    .ul__li--button3 {
        align-self: flex-start;
        padding-bottom: 10px;
    }

  @media (min-width: 720px) {
      .ul__li--button3 {
          padding-right: 0;
      }
  }

</style>
