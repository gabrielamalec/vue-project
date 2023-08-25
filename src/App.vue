<script setup>
// import ButtonItem from './components/ButtonItem.vue'
import ImageBeach from './components/ImageBeach.vue'
import SectionImages from './components/SectionImages.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import AdImage from './components/AdImage.vue'
import MainForm from './components/MainForm.vue'
import ToggleForm from './components/ToggleForm.vue'
import { useBreakpoints } from '@vueuse/core'
import { ref, watch } from 'vue';

const breakpoints = useBreakpoints({
    mobile: 720,
    tablet: 1200,
  })

const mobile = breakpoints.smallerOrEqual('mobile');
const desktop = breakpoints.greaterOrEqual('tablet');


const adVisibility = ref('hidden');
const formVisibility = ref(false);

const toggleImageVisibility = () => {
  if (adVisibility.value === 'hidden') {
    adVisibility.value = 'visible';
  } else {
    adVisibility.value = 'hidden';
  }
};

watch(desktop, () => {
  if (!desktop.value) adVisibility.value = 'hidden';
})

const toggleFormVisibility = (value) => {
  formVisibility.value = value;
};

watch(mobile, () => {
  if (mobile.value) formVisibility.value = false;
})

const handleFormSubmitted = (data) => {
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
      <div class="d-center">
        <ImageBeach class="cent-1"></ImageBeach>
        <ImageBeach class="cent-2"></ImageBeach>
      </div>
      <ToggleForm @show-form="toggleFormVisibility"/>
      <MainForm v-show="formVisibility" @send-data="handleFormSubmitted"/>
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
