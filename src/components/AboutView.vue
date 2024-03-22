<script setup>
import { ref } from 'vue';

const isTableVisible = ref(false);
const password = ref('');
const correctPassword = '210185'; // замените на ваш паро
const isPasswordIncorrect = ref(false);

const checkPassword = () => {
  if (password.value === correctPassword) {
    isTableVisible.value = !isTableVisible.value;
    isPasswordIncorrect.value = false;
  } else {
    isPasswordIncorrect.value = true;
  }
};
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
      


      </div>

      <!-- Таблица -->
      <div class=" sm:w-1/3 p-4 w-full overflow-auto">
        <input v-model="password" type="password" placeholder="Введите пароль" class="border-2 border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-700">
        <button @click="checkPassword" class="bg-red-500 mt-4 mb-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  {{ isTableVisible ? 'Скрыть таблицу' : 'Показать таблицу' }}
</button>
<p v-if="isPasswordIncorrect" class="text-red-500 mt-2 mb-2 text-sm border-b p-2 rounded">Пароль введен неправильно</p>

        <table v-show="isTableVisible"  class="w-full table-auto text-xs sm:text-sm">
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
           <div class="border-b border-gray-200 hover:bg-gray-100">
  <div class="py-3 text-nowrap px-2 sm:px-6 text-xs sm:text-sm font-semibold">
    <p class="text-red-500 font-bold">Технология приготовоения.</p>
    Филе Осетра без Шкуры разрезать на куски как на видио.
    <p>Маринуем куски осетра в маринаде как написано в Рецепте.</p>
    <p>Связываем шпагатом и подвешиваем на кручки в холодильник.</p>
    <p>Вялим 48 часов при температуре +4 градуса.</p>
    <p>Усушка 10%.</p>
    <p>Продукта.</p>
  </div>
</div>
           
       
          
          
           
           
         </tbody>

 
        </table>

        
        <div class="sm:w-1/3 p-4 w-full overflow-auto">
  <table class="w-full table-auto text-xs sm:text-sm">
    <!-- Ваша таблица -->
  </table>
  <div class="sm:hidden md:hidden text-center text-xl text-gray-500 mt-2">
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


  