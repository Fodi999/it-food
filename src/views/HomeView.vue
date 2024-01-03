<script setup>
import MainVue from '@/components/MainVue.vue';
import CartVue from '@/components/CartVue.vue';
import 'boxicons/css/boxicons.min.css'


</script>

<template>
  <div class="bg-white max-w-screen-xl mx-auto">
  <header class="px-0 border-b border-sky-900 flex items-center justify-between h-14">
        <img class="m-2 w-10 h-10 transition-transform hover:scale-150" src="/Ellipse 50.png" alt="logo" />
        <h1 class=" sm:ml-40 uppercase font-bold text-sky-900 text-3xl cursor-pointer transition-all hover:scale-150" href="#">IT & Cook</h1>
        <nav class="hidden md:flex items-center">
          <ul class="text-gray-500 font-semibold inline-flex items-center">
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
          
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram bx-sm  text-orange-600'></i>
          </a>
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-facebook-circle bx-sm text-blue-800 '></i>
          </a>
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-gmail bx-sm  text-purple-800' ></i>
          </a>
           </ul>
          
        </nav>
        <button class=" inline-block md:hidden">
          <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bx-menu'></i>
        </button>
         </header>
         <MainVue />
         <CartVue />
         
       
   
 
       
            <p class=" mt-14 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>

         </div>

</template>
