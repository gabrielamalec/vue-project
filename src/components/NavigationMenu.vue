<script setup>
  import ButtonItem from './ButtonItem.vue'
  import ButtonHamburger from './ButtonHamburger.vue'


  import { onMounted, ref, inject } from 'vue';

  const mobile = ref(null);
  const mobileNav = ref(null);
  const windowWidth = ref(null);

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
  };

  const checkWidth = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 720) {
      mobile.value = true;
    } else {
      mobile.value = false;
      mobileNav.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', checkWidth);
    checkWidth();
  });

  // const showImage = inject('showImage');

  // const toggleImageVisibility = () => {
  //     showImage.value = !showImage.value;
  //   };


  </script>

<template>
    <ul v-show="!mobile" class="main_menu">
      <li class="ul__li"><ButtonItem @click="toggleImageVisibility">button 1</ButtonItem></li>
      <li class="ul__li"><ButtonItem>button 2</ButtonItem></li>
      <li class="ul__li ul__li--button3"><ButtonItem>button 3</ButtonItem></li>
    </ul>
    <div class="hamburger-posit">
      <ButtonHamburger @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}" />
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="side_menu">
        <li class="side__li m-top-90"><ButtonItem>button 1</ButtonItem></li>
        <li class="side__li"><ButtonItem>button 2</ButtonItem></li>
        <li class="side__li"><ButtonItem>button 3</ButtonItem></li>
      </ul>
    </transition>
</template>

<!-- <script>
  export default {
    data() {
      return {
        mobile: null,
        mobileNav: null,
        windowWidth: null,
      }
    },
    created() {
      window.addEventListener("resize", this.checkWidth);
      this.checkWidth();
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },

      checkWidth() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 720) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    }
  }
</script> -->



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
    transition: 1s ease all;
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