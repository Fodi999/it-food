<script setup>
import HomeButton from './HomeButton.vue';
import HomeHeader from './HomeHeader.vue';


</script>

<template>
  <nav class=" z-30 sticky top-0 left-0 w-full  border-b-4 border-sky-900  bg-white flex justify-between items-center py-3 px-5">
        <a href="">
          <div>
            <HomeButton />
          </div>
          
          
          
        </a>
        
        <router-link class=" text-green-600" to="/">
  <button>
    <h1 class="uppercase font-bold text-sky-900 text-2xl cursor-pointer transition-transform hover:scale-110 " href="#">Sea & food</h1>
</button>
        </router-link>

       <HomeHeader />
        </nav>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
          <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="  h-56  w-full rounded-xl object-cover" src="/public/Rectangle 103.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
         Купить
        </button>
        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="  h-56  w-full rounded-xl object-cover" src="/public/Rectangle 104.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
         Купить
        </button>
        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="  h-56  w-full rounded-xl object-cover" src="/public/Rectangle 105.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
         Купить
        </button>
        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="  h-56  w-full rounded-xl object-cover" src="/public/Rectangle 104.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
         Купить
        </button>
        </div>
        
    </div>
  </div>

        </div>
        
       
      
        
      
        
        


         
   
        


         
   
   
      
      <p class=" mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p> 
   </template>


