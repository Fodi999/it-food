<script setup>
import MainVue from '@/components/MainVue.vue';
import CartVue from '@/components/CartVue.vue';
import 'boxicons/css/boxicons.min.css'
import HomeButton from '@/components/HomeButton.vue';
import HomeHeader from '@/components/HomeHeader.vue';


defineExpose({
  components: {
    MainVue,
    CartVue,
    HomeButton,
    HomeHeader,
    
  },
});
</script>

<template>
  <div>
    
        
          <div>
            <HomeButton />
          </div>
          
          
          
          
      
        
        
       
        
        
         <MainVue />
         <CartVue />
          

         
       
   
 
       
            <p class=" sm:mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>

         

  </div>
  
  
</template>