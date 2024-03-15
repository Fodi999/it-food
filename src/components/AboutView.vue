<script setup>
import { ref } from 'vue';


const open = ref(false);
</script>

<template>
  <div>
    <div class="flex flex-wrap ">
      <!-- Изображение -->
      <div class="sm:w-1/4 p-4 w-full">
        <img class="object-cover w-full h-full" src="/Rectangle 100.png" alt="">
      </div>

      <!-- Текст -->
      <div class="sm:w-1/3 p-4 w-full">
        <h3 class="border-b border-sky-900 text-gray-700 font-bold text-2xl">{{ $t('blogTextName') }}</h3>
        <p class="text-rose-600 font-semibold mb-2">{{ $t('blogTextHeading') }}</p>
        <div class="w-full max-w-sm me-auto bg-sky-800 p-1  rounded-lg shadow-md">
<div @click="open = !open" class="w-full bg-blue-500 text-white font-bold text-sm text-center p-2 cursor-pointer rounded-lg">
Процесс приготовления
</div>
<div v-if="open" class="w-full border border-t-0 p-4  bg-white mt-2 rounded-lg">
<p class="text-left text-sm my-2">1-Время засолки 48 часов</p>
<p class="text-left text-sm my-2">2- вымачиваем 6 часов в холодной воде</p>
<p class="text-left text-sm my-2">3- маринуем</p>
<p class="text-left text-sm my-2">4- вялим 14 дней</p>
<p class="text-left text-sm my-2">5- усушка 200 г. с 1 кг.</p>




            </div>
           
            </div>

      </div>

      <!-- Таблица -->
      <div class="sm:w-1/3 p-4 w-full overflow-auto">
        <table class="w-full table-auto text-xs sm:text-sm">
         <thead>
           <tr class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
             <th class="py-3 px-6 text-left">Ингредиент</th>
             <th class="py-3 px-6 text-left">Мера Измерения</th>
             <th class="py-3 px-6 text-center">Брута</th>
             <th class="py-3 px-6 text-center">Нетто</th>
           </tr>
         </thead>
         <tbody class="text-gray-600 text-xs font-light">
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left whitespace-nowrap">Филе осетра без шкуры</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">1,000</td>
             <td class="py-3 px-6 text-center">0,800</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Соль</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,150</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Лимонный перец</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,005</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Кайенский перец</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,005</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Пожитник молотый</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,005</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Кимчи соус</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,060</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left">Растительное масло</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">0,060</td>
             <td class="py-3 px-6 text-center">-----</td>
           </tr>
           <tr class="border-b border-gray-200 hover:bg-gray-100">
             <td class="py-3 px-6 text-left font-semibold">Выход :</td>
             <td class="py-3 px-6 ps-20 text-left">г</td>
             <td class="py-3 px-6 text-center">-----</td>
             <td class="py-3 px-6 text-center font-semibold">0,800</td>
           </tr>

         </tbody>
        </table>
        <div class="sm:w-1/3 p-4 w-full overflow-auto">
  <table class="w-full table-auto text-xs sm:text-sm">
    <!-- Ваша таблица -->
  </table>
  <div class="sm:hidden md:hidden text-center text-sm text-gray-500 mt-2">
    <i class='bx bx-arrow-to-left' style='color:#ff0000'  ></i><i class='bx bx-arrow-to-right' style='color:#ff0000'  ></i>
  </div>
</div>
      </div>
    </div>
    </div>
    <div class="sm:w-1/3 p-4 w-full rounded flex justify-center items-center m-auto">
  <iframe class="w-full h-64 sm:h-96 rounded" src="https://www.youtube.com/embed/cCAbd50y1OY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>      

        
            
           

            

         
   
   
      
      <p class=" mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>


   </template>


  