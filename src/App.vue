<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let views = ref(0);

onMounted(async () => {
  try {
    // Увеличиваем счетчик просмотров на сервере
    await axios.post('/api/views');

    // Получаем обновленное количество просмотров
    const response = await axios.get('/api/views');
    views.value = response.data.views;
  } catch (error) {
    console.error('Ошибка при обновлении счетчика просмотров:', error);
  }
});
</script>

<template>
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
      <span class=" ml-2">{{ views }}</span>
    </div>
  </div>
</template>