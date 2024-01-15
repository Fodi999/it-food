<script setup>
import MainVue from '@/components/MainVue.vue';
import CartVue from '@/components/CartVue.vue';
import 'boxicons/css/boxicons.min.css'
import HomeButton from '@/components/HomeButton.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import OrderButton from '@/components/OrderButton.vue';

defineExpose({
  components: {
    MainVue,
    CartVue,
    HomeButton,
    HomeHeader,
    OrderButton
  },
});
</script>

<template>
  
  <nav class=" z-30 sticky top-0 left-0 w-full  border-b-4 border-sky-900  bg-white flex justify-between items-center py-3 px-5">
        <a href="">
          <div>
            <HomeButton />
          </div>
          <OrderButton />
          
          
          
        </a>
        <h1 class="uppercase font-bold text-sky-900 text-2xl" href="#">Sea & food</h1>
       <HomeHeader />
        </nav>
         <MainVue />
         <CartVue />
          

         
       
   
 
       
            <p class=" sm:mt-14 pb-8 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>

         

</template>
