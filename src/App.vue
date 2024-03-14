<script setup>
import HomeButton from './components/HomeButton.vue';
import HomeHeader from './components/HomeHeader.vue';

</script>


<template>
  <div>
    <div>
      
    </div>
    <nav class="z-30 sticky top-0 left-0 w-full border-b-4 border-sky-900 bg-white flex justify-between items-center py-3 px-5">
      <div>
        <HomeButton />
      </div>
      <router-link class="text-green-600" to="/">
        <button>
          <h1 class="uppercase font-bold text-sky-900 text-2xl cursor-pointer transition-transform hover:scale-110">Sea & food</h1>
        </button>
      </router-link>
      <HomeHeader />
    </nav>
    <div>
      <OrderButton />
    </div>
  </div>
  <div class="flex flex-col h-screen justify-between">
    <router-view v-slot="{ Component }">
      <div class="flex-grow">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>
    <div class="text-center py-4 bg-sky-950 text-white shadow-lg">
    
    </div>
  </div>
</template>