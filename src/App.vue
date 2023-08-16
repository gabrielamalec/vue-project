<script setup>
// import ButtonItem from './components/ButtonItem.vue'
import ImageBeach from './components/ImageBeach.vue'
import SectionImages from './components/SectionImages.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import NavigationMenu from './components/NavigationMenu.vue';
</script>

<template>
  <header>
    <HeaderTitle>LOGO TEXT</HeaderTitle>
    <NavigationMenu />
  </header>

  <main>
    <SectionImages>
      <ImageBeach class="cent-1"></ImageBeach>
      <ImageBeach class="cent-2"></ImageBeach>
    </SectionImages>
  </main>
</template>

<style>
</style>
