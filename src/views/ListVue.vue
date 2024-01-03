<script setup>
import MainVue from '@/components/MainVue.vue';

const downloadImage1 = () => {
  const imageUrl = '/Rectangle 33.png';
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'downloaded-image.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

defineExpose({
  downloadImage1
});
</script>

<template>
  <div class="bg-white max-w-screen-xl mx-auto">
  <header class="px-0 border-b border-sky-900 flex items-center justify-between h-14">
        <router-link class=" text-green-600" to="/">
          <button>
            <img class="m-2 w-10 h-10 transition-transform hover:scale-150" src="/Ellipse 50.png" alt="logo" />
          </button>
        </router-link>
        <h1 class="ml-40  uppercase font-bold text-sky-900 cursor-pointer transition-all hover:scale-150" href="#">IT & Cook</h1>
        <nav class="hidden md:flex items-center">
          <ul class="text-gray-500 font-semibold inline-flex items-center">
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <img class="cursor-pointer m-2 w-6 h-6 transition-transform hover:scale-150" src="/Vector 3.svg" alt="">
          </a>
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <img class="cursor-pointer m-2 w-6 h-6 transition-transform hover:scale-150" src="/Vector 2.svg" alt="">
          </a>
          <a href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <img class="cursor-pointer m-2 w-6 h-6 transition-transform hover:scale-150" src="/Vector 1.svg" alt="">
          </a>
          


          </ul>
          <ul class="inline-flex items-center">
            <li><button class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-sky-900 text-sky-900 hover:text-white hover:bg-sky-900 transition-all duration-1000">Login</button></li>
            <li><button class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-sky-900 text-sky-900 hover:text-white hover:bg-sky-900 transition-all duration-1000">Register</button></li>
          </ul>
        </nav>
         </header> 
         <MainVue/>
        <div>
          <div class="py-4 overflow-y-auto whitespace-nowrap">
          
          
          </div>
        </div>
        <section class=" px-2">
          <a class="flex mb-10" href="">
            <img class=" h-96  object-cover mr-4" src="/Rectangle 15.png" alt="">
            <div class="max-w-screen-xl mx-auto">
                <button @click="downloadImage1" class="flex items-center space-x-1 border-1 rounded-full font-bold py-1.5 px-1.5 border-sky-800 text-sky-800 hover:text-white hover:bg-sky-900" onClick={handleDownload}>
              <img class="w-8 h-8 cursor-pointer transition-transform hover:scale-110" src="/Ellipse 50.png" alt="feis" />
              <span class="px-2 text-xs">Dowenload & New menu</span>
              </button>
              <div class="">
                
                <h3 class=" mt-2 mb-2 border-b border-sky-900 text-gray-700 font-bold text-2xl"> Фомин Дмитрий Шеф повар </h3>
                
                <p class="text-gray-700 text-wrap mb-2">Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                   Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас , и поделится с вами идеями и вкусами.
                   Для каждого повара, тем паче домашнего, возможность творить из того, что есть под рукой, всегда удивительно и прекрасно.
                   Строгие рецепты ограничивают творчество. До недавнего времени методом проб и ошибок был единственным способом узнать, какие продукты будут хорошо сочетаться между собой. 
                   А украсить своим творением семейный стол - двойное удовольствие. Новое всегда будет радостью для своих любимых и друзей. 
                   И независимо от того, что у вас в результате получится, вы можете быть твердо уверены в одном: это всегда будет вкуснее купленного в супермаркете.
                   Как и в любом деле, здесь также важно умение обращаться с инвентарем и знание технологического процесса. 
                   Поварское ремесло не отличается от других: вашими инструментами могут быть голые руки, а принадлежностями продукты, но при этом также важно знать то, как они должны действовать и взаимодействовать с другими компонентами. 
                   Я расскажу с какими продуктами я работаю, и какую пользу они приносят нам. Чтобы не начинать с чистого листа, Вы сможете брать эти рецепты за основу и создавать новые кулинарные шедевры.
                   Вы опытный повар или новичек ? Кем бы вы ни были , надеюсь этот Блог поможет вам раскрыть ваши таланты .
                   Добавьте щепотку науки о вкусе в свое блюдо знаний ! Пусть этот Блог откроет вам мир новых гастрономических изысков.
               </p>
              

              </div>

            </div>
          </a>
        </section>
        


         
   
   
      </div>
      <p class=" mt-14 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>
   </template>


