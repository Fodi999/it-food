<script setup>
import MainVue from '@/components/MainVue.vue';
import CartVue from '@/components/CartVue.vue';
import 'boxicons/css/boxicons.min.css'
import HomeButton from '@/components/HomeButton.vue';
defineExpose({
  components: {
    HomeButton,
  },
});

</script>

<template>
  
  <nav class=" z-30 sticky top-0 left-0 w-full  border-b-4 border-sky-900  bg-white flex justify-between items-center py-3 px-5">
        <a href="">
          <div>
            <HomeButton />
          </div>
          
          
          
        </a>
        <h1 class="uppercase font-bold text-sky-900 text-2xl" href="#">IT & Cook</h1>
        <nav class="md:flex items-center">
          <ul class="text-gray-500 font-semibold inline-flex items-center">
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram bx-sm  text-sky-900'></i>
          </a>
           </ul>
        </nav>
        </nav>
         <MainVue />
         <CartVue />
         
       
   
 
       
            <p class=" mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>

         

</template>
