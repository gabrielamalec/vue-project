<script setup>
// import ButtonItem from './components/ButtonItem.vue'
import ImageBeach from './components/ImageBeach.vue'
import SectionImages from './components/SectionImages.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import AdImage from './components/AdImage.vue'
import MainForm from './components/MainForm.vue'
import ToggleForm from './components/ToggleForm.vue'

import { ref } from 'vue';

const adVisibility = ref('hidden');
const formVisibility = ref(false);

const toggleImageVisibility = () => {
  if (adVisibility.value === 'hidden') {
    adVisibility.value = 'visible';
  } else {
    adVisibility.value = 'hidden';
  }
};

const toggleFormVisibility = (value) => {
  formVisibility.value = value;
  console.log("test")
};

const jsonData = ref(null);

const handleFormSubmitted = (data) => {
  jsonData.value = data;
  console.log(JSON.stringify(data))
};

</script>

<template>
  <header>
    <HeaderTitle>LOGO TEXT</HeaderTitle>
    <NavigationMenu @ad-toggle="toggleImageVisibility" />
  </header>

  <main>
    <SectionImages>
      <ImageBeach class="cent-1"></ImageBeach>
      <ImageBeach class="cent-2"></ImageBeach>
    </SectionImages>
    <ToggleForm @show-form="toggleFormVisibility"/>
    <MainForm v-show="formVisibility" @send-data="handleFormSubmitted"/>
  </main>
  <AdImage :style="{ visibility: adVisibility }" />
</template>

<style>
</style>
