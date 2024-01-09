<template>
    <button @click="scrollToTop" v-if="showButton" class="home-button">
        <i class='bx bx-home-alt-2 bx-sm transition-transform hover:scale-150  text-sky-900 '></i>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      handleScroll() {
        this.showButton = window.scrollY > 200;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
},
  };
  </script>
  
  
  