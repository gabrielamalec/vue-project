<script setup>
  import ButtonItem from './ButtonItem.vue'
  import ButtonHamburger from './ButtonHamburger.vue'
  import { useBreakpoints } from '@vueuse/core'
  import { ref, watch } from 'vue';

  const emit = defineEmits(['adToggle'])

  const breakpoints = useBreakpoints({
    mobile: 720,
    tablet: 1200,
  })

  const mobile = breakpoints.smallerOrEqual('mobile');
  // const tablet = breakpoints.between('mobile', 'tablet');
  // const desktop = breakpoints.greaterOrEqual('tablet');

  // const mobile = ref(null);
  const mobileNav = ref(false);
  // const windowWidth = ref(null);

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
    console.log("test")
  };

  // const checkWidth = () => {
  //   windowWidth.value = window.innerWidth;
  //   if (windowWidth.value <= 720) {
  //     mobile.value = true;
  //   } else {
  //     mobile.value = false;
  //     mobileNav.value = false;
  //   }
  // };

  // onMounted(() => {
  //   window.addEventListener('resize', checkWidth);
  //   checkWidth();
  // });


  watch(mobile, () => {
    if (!mobile.value) mobileNav.value = false;
  })

</script>

<template>
    <ul v-show="!mobile" class="main_menu">
      <li class="ul__li"><ButtonItem @click="emit('adToggle')">button 1</ButtonItem></li>
      <li class="ul__li"><ButtonItem>button 2</ButtonItem></li>
      <li class="ul__li ul__li--button3"><ButtonItem>button 3</ButtonItem></li>
    </ul>
    <div class="hamburger-posit">
      <ButtonHamburger @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}" />
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav && mobile" class="side_menu">
        <li class="side__li m-top-90"><ButtonItem>button 1</ButtonItem></li>
        <li class="side__li"><ButtonItem>button 2</ButtonItem></li>
        <li class="side__li"><ButtonItem>button 3</ButtonItem></li>
      </ul>
    </transition>
</template>

<style lang="scss" scoped>
  .ul__li {
        align-self: flex-end;
      }

  .side__li {
      display: flex;
      width: 80%;
      margin-bottom: 20px;
  }

  .m-top-90 {
    margin-top: 90px;
  }

  .main_menu {
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

      .ul__li {
          padding-right: 20px;
      }
  }

  .side_menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    max-width: 200px;
    height: 100%;
    background-color: #dedede;
    top: 0;
    right: 0;
    padding: 0;
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 0.5s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(200px);
  }


  @media (min-width: 1200px) {
    .main_menu {
        height: 40vh;
        flex-direction: column;
        padding: 15px 16px 30px;
    }

    .main_menu :nth-child(1) {
      order: 1;
    }

    .ul__li {
        padding-right: 0;
    }

    .ul__li--button3 {
        padding-bottom: 15vh;
    }

  }


</style>