<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import HomeButton from './components/HomeButton.vue';
import HomeHeader from './components/HomeHeader.vue';
import CodeButton from './components/CodeButton.vue';

let views = ref(0);

onMounted(async () => {
  try {
    // Увеличиваем счетчик просмотров на сервере другого API
    await axios.post('https://другой-api.com/views');

    // Получаем обновленное количество просмотров
    const response = await axios.get('https://другой-api.com/views');
    views.value = response.data.views;
  } catch (error) {
    console.error('Ошибка при обновлении счетчика просмотров:', error);
  }
});
</script>


<template>
  <div>
    <div>
      <CodeButton />
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
      <span class="text-">Просмотры :</span> 
      <span class="ml-2">{{ views }}</span>
    </div>
  </div>
</template>