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
   
<section class=" px-2 lg:flex lg:space-x-2">
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 18.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Notatki od Szefa Kuchni</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
            Ten blog jest napisany dla tych, którzy chcą rozwijać się w branży gastronomicznej:
                             Dima Fomin jest szefem kuchni z dużym doświadczeniem w branży spożywczej i kulinarnej. Moja podróż kulinarna trwa już ponad 20 lat.
                             podczas których pracowałem w różnych krajach i studiowałem liczne technologie tworzenia nowych produktów.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz 
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 33.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Przepis na Сeviche</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
            Ceviche to pyszne danie kuchni latynoamerykańskiej składające się ze świeżych owoców morza marynowanych w sosie na bazie soku cytrusowego.
                             W tej wersji używamy przegrzebków i karabinierów, aby stworzyć niezapomniane danie dla gości.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/list">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 14.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Food Business</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
                        This Blog is written for those who want to develop in the Gastronomy Business:
                        Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                        during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0  " src="/Rectangle 12.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Food Business</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
                        This Blog is written for those who want to develop in the Gastronomy Business:
                        Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                        during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
 
</section>
<section class=" px-2 lg:flex lg:space-x-2">
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 29.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Food Business</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
                        This Blog is written for those who want to develop in the Gastronomy Business:
                        Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                        during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 37.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Seviche</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
            Ceviche is an exquisite Latin American dish consisting of fresh seafood marinated in a sauce based on citrus juice. 
                        In this version we use Scallop and Carabinieri to create a sophisticated dish with exquisite taste and aroma.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz 
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0 " src="/Rectangle 38.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Food Business</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
                        This Blog is written for those who want to develop in the Gastronomy Business:
                        Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                        during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
  <a class=" w-full lg:w-2/3  bg-gradient-to-tr h-96 mb-4 relative rounded inline-block overflow-hidden"  href="">
    <div class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10  to-black/60"></div>
    <img class="absolute left-0 top-0 z-0  " src="/Rectangle 39.png" alt="">
    
    <div class="p-2 absolute bottom-0 left-0 z-20">
      <h2 class=" text-2xl  font-semibold  leading-tight text-white mb-2">Food Business</h2>
      
        <img class="h-10 w-10 mr-4 object-cover" src="/Ellipse 1.png" alt="">
        <p class="font-semibold text-white text-sm leading-tight ">Dima Fomin</p>
        
        <div class="pt-2 " >
          <h4 class="text-white sm:text-xs ">
                        This Blog is written for those who want to develop in the Gastronomy Business:
                        Dmitry Fomin - Chef with extensive experience in the food and culinary industry. My culinary journey spans over 20 years, 
                        during which I have worked in various countries and immersed myself in numerous technologies for creating new taste experiences.
                      </h4>
        </div>
        
        <div class=" flex justify-end pt-4">
        
          <div class="font-semibold text-yellow-300  mr-auto">{{ currentDate }}</div>
                        <router-link to="/about">
                        <button  class="ml-2 py-1 px-3 border-2  font-bold rounded-full border-yellow-400 text-yellow-300 hover:text-sky-900 hover:bg-yellow-300 transition-all duration-1000" >
                          Otwórz
                        </button>
                      </router-link>
        </div>            
      </div>
  </a>
 
</section>


   
 
    
     
     

</template>
