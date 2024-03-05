<script setup>
import HomeButton from './HomeButton.vue';
import HomeHeader from './HomeHeader.vue';
</script>

<template>
  <div>
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
        
        <section class="flex px-8 pt-4 ">
          <a class="sm:flex mb-10" href="">
            <img class=" h-96  object-cover mr-4" src="/Rectangle 18.png" alt="">
            <div class="sm:flex">
              <div>
                <h3 class=" mt-2 mb-2 border-b border-sky-900 text-gray-700 font-bold text-2xl">{{ $t('blogTextName') }}</h3>
                <p class=" text-rose-600 font-semibold mb-2">{{ $t('blogTextHeading') }}</p>
                <table class="table-auto w-full mt-4">
  <caption class="text-center py-2 font-bold">Название продукта</caption>
  <thead>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Ингредиент</th>
      <th class="px-2 sm:px-4 py-2 border">Граммы</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Рыба</td>
      <td class="border px-2 sm:px-4 py-2">100 г</td>
    </tr>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Гарнир</td>
      <td class="border px-2 sm:px-4 py-2">200 г</td>
    </tr>
    <!-- Добавьте больше строк по мере необходимости -->
  </tbody>
  <tfoot>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Выход: Продукта</th>
      <td class="px-2 sm:px-4 py-2 border font-semibold">300 г</td>
    </tr>
    <a href="url_to_your_png_file.png" download class="px-4 py-2 mt-4  bg-blue-500 text-white rounded hover:bg-blue-700">
  Скачать PNG
</a>
  </tfoot>
</table>

                
               

              </div>

            </div>
          </a>
        </section>
        <section class="flex px-8 pt-4 ">
          <a class="sm:flex mb-10" href="">
            <img class=" h-96  object-cover mr-4" src="/Rectangle 12.png" alt="">
            <div class="sm:flex">
              <div>
                <h3 class=" mt-2 mb-2 border-b border-sky-900 text-gray-700 font-bold text-2xl">{{ $t('blogTextName') }}</h3>
                <p class=" text-rose-600 font-semibold mb-2">{{ $t('blogTextHeading') }}</p>
                <table class="table-auto w-full mt-4">
  <caption class="text-center py-2 font-bold">Название продукта</caption>
  <thead>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Ингредиент</th>
      <th class="px-2 sm:px-4 py-2 border">Граммы</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Рыба</td>
      <td class="border px-2 sm:px-4 py-2">100 г</td>
    </tr>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Гарнир</td>
      <td class="border px-2 sm:px-4 py-2">200 г</td>
    </tr>
    <!-- Добавьте больше строк по мере необходимости -->
  </tbody>
  <tfoot>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Выход: Продукта</th>
      <td class="px-2 sm:px-4 py-2 border font-semibold">300 г</td>
    </tr>
    <a href="url_to_your_png_file.png" download class="px-4 py-2 mt-4  bg-blue-500 text-white rounded hover:bg-blue-700">
  Скачать PNG
</a>
  </tfoot>
</table>
                
               

              </div>

            </div>
          </a>
        </section>
        <section class="flex px-8 pt-4 ">
          <a class="sm:flex mb-10" href="">
            <img class=" h-96  object-cover mr-4" src="/Rectangle 102.png" alt="">
            <div class="sm:flex">
              <div>
                <h3 class=" mt-2 mb-2 border-b border-sky-900 text-gray-700 font-bold text-2xl">{{ $t('blogTextName') }}</h3>
                <p class=" text-rose-600 font-semibold mb-2">{{ $t('blogTextHeading') }}</p>
                <table class="table-auto w-full mt-4">
  <caption class="text-center py-2 font-bold">Название продукта</caption>
  <thead>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Ингредиент</th>
      <th class="px-2 sm:px-4 py-2 border">Граммы</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Рыба</td>
      <td class="border px-2 sm:px-4 py-2">100 г</td>
    </tr>
    <tr>
      <td class="border px-2 sm:px-4 py-2">Гарнир</td>
      <td class="border px-2 sm:px-4 py-2">200 г</td>
    </tr>
    <!-- Добавьте больше строк по мере необходимости -->
  </tbody>
  <tfoot>
    <tr>
      <th class="px-2 sm:px-4 py-2 border">Выход: Продукта</th>
      <td class="px-2 sm:px-4 py-2 border font-semibold">300 г</td>
    </tr>
    <a href="url_to_your_png_file.png" download class="px-4 py-2 mt-4  bg-blue-500 text-white rounded hover:bg-blue-700">
  Скачать PNG
</a>
  </tfoot>
</table>
                
               

              </div>

            </div>
          </a>
        </section>
        
      
        
        


         
   
        


         
   
   
      
      <p class=" mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>
  </div>

   </template>


  