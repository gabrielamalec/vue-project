<script setup>
// import ButtonItem from './components/ButtonItem.vue'
import ImageBeach from './components/ImageBeach.vue'
import SectionImages from './components/SectionImages.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import AdImage from './components/AdImage.vue'
import MainForm from './components/MainForm.vue'
import ToggleForm from './components/ToggleForm.vue'
import { ref, watch } from 'vue';
import { useBreaks } from './composables/useBreaks.js';


const { mobile, desktop } = useBreaks();
const adVisibility = ref('hidden');
const formVisibility = ref(false);

const toggleAdVisibility = () => {
  if (adVisibility.value === 'hidden') {
    adVisibility.value = 'visible';
  } else {
    adVisibility.value = 'hidden';
  }
};

watch(desktop, () => {
  if (!desktop.value) adVisibility.value = 'hidden';
})

watch(mobile, () => {
  if (mobile.value) formVisibility.value = false;
})

watch(desktop, () => {
  if (desktop.value) formVisibility.value = true;
})

</script>

<template>
  <header>
    <HeaderTitle>LOGO TEXT</HeaderTitle>
    <NavigationMenu @ad-toggle="toggleAdVisibility"/>
  </header>

  <main>
    <SectionImages>
      <div class="d-center">
        <ImageBeach class="cent-1"></ImageBeach>
        <ImageBeach class="cent-2"></ImageBeach>
      </div>
      <ToggleForm @show-form= "(value) => { formVisibility = value }" />
      <MainForm v-show="formVisibility" @send-data="(data) => { console.log(JSON.stringify(data)) }" />
    </SectionImages>
  </main>
  <AdImage :style="{ visibility: adVisibility }" />
</template>

<style lang="scss" scoped>
  .d-center {
    display: flex;
    justify-content: center;
  }

</style>
