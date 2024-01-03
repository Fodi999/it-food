<script>

export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString()
    }
  }
}
  
</script>

<template>
   <section class=" lg:flex  lg:space-x-2 my-2  px-2 border-sky-900">
           
     <a class="w:full lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden " href="#">
      <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 18.png" alt="" />
            
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
               
              <h4 class=" relative mb-20 top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">Food Business</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Dima Fomin</p>
                <time class=" text-sky-950 normal-case sm:text-xs">
                  This Blog is written for those who want to develop in the Gastronomy Business:
                  Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                  during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md text-red-600 hover:text-green-600'></i> 
                  </button>
                </router-link>
                
            </div>
        </a>
        <a class="lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900  pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 33.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32 top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">Seviche</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Ceviche is an exquisite Latin American dish consisting of fresh seafood marinated in a sauce based on citrus juice. 
                  In this version we use Scallop and Carabinieri to create a sophisticated dish with exquisite taste and aroma.
                </time>
                <router-link to="/list">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600 '></i>
                  </button>
                </router-link>
            </div>
        </a>


        <a class="lg:w-1/3 bg-gra h-96 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 14.png" alt="" /> 
            
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600'></i> 
                  </button>
                </router-link>
            </div>
        </a>


        <a class="lg:w-1/3 bg-gra h-96 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 12.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600'></i> 
                  </button>
                </router-link>
            </div>
        </a>
    </section>
    <section class=" lg:flex lg:space-x-2 my-2 px-2 border-b  border-sky-900">
            <a class="lg:w-1/3 bg-gra h-96 relative group rounded inline-block overflow-hidden " href="#">
              <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900  pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 15.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600 '></i> 
                  </button>
                </router-link>
            </div>
        </a>


        <a class="lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 37.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600 '></i> 
                  </button>
                </router-link>
            </div>
        </a>


        <a class="lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 38.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600'></i> 
                  </button>
                </router-link>
            </div>
        </a>


        <a class="lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden " href="#">
          <div class="absolute top-0 right-0  font-semibold  text-sky-900 hover:text-white hover:bg-sky-900 pr-2">{{ currentDate }}</div>
            <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" src="/Rectangle 39.png" alt="" />  
            <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h4 class=" relative mb-32  top-0 left-0 text-1xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h4>
                <div class="flex mt-3">
                  <img class="h-10 w-10 rounded-full mr-4 object-cover" src="/Ellipse 1.png" alt="">
                </div>
                <p class="font-semibold  text-sky-950 text-sm">Domian Fomin</p>
                <time class=" text-sky-950 normal-case text-xs">
                  Этот Блог написан для тех ,кто готов открыть для себя восхитительные комбинаций вкусов .
                  Хочу рассказать и  научить вас готовить новые блюда, которые я придумываю и готовлю для того чтоб удивить вас ,
                  и поделится с вами идеями и вкусами.
                </time>
                <router-link to="/about">
                  <button class="flex justify-center sm:ml-64">
                    <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md  text-red-600 hover:text-green-600'></i> 
                  </button>
                </router-link>
            </div>
        </a>
        

      </section>
     

</template>
