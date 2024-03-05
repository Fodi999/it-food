<script setup>
import html2canvas from 'html2canvas';


const downloadCard = (event) => {
  event.preventDefault();
  let element = event.currentTarget.closest('.bg-white.rounded-lg.shadow.p-4'); // получаем ближайший родительский элемент карточки

  html2canvas(element).then(canvas => {
    let imgData = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.href = imgData;
    link.download = 'product-card.png';
    link.click();
  });
};
</script>

<template>
  
        
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
         
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="h-auto w-full rounded-xl object-contain" src="/public/Rectangle 105.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          
  <button @click="downloadCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
    <i class=' text-2xl bx bx-cart-download'></i>
  </button>

        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl" >
     <img class="h-auto w-full rounded-xl object-contain" src="/public/Rectangle 103.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          
  <button @click="downloadCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
    Купить
  </button>

        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="h-auto w-full rounded-xl object-contain" src="/public/Rectangle 104.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          
  <button @click="downloadCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
    Купить
  </button>

        </div>
        
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
     <img class="h-auto w-full rounded-xl object-contain" src="/public/Rectangle 101.png" alt="Изображение товара">
      <p class="block mt-4 text-lg leading-tight font-medium text-sky-900 ">{{ $t('blogTextNameSushi') }}</p>
      <p class="text-sm font-bold text-sky-900 ">{{ $t('blogTextHeading') }}</p>
      <div class=" flex justify-between">
        <div class=" flex flex-col justify-end h-full">
          <span class=" text-red-500 ">Цена</span>
          <p class=" text-gray-500 text-lg font-bold ">Цена: $100</p>
          
  <button @click="downloadCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-52 m-4 transition hover:-translate-y-2 hover:shadow-xl">
    Купить
  </button>

        </div>
        
    </div>
  </div>
  

        </div>
        
       
      
        
      
        
        


         
   
        


         
   
   
      
      <p class=" mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p> 
   </template>


