<script setup>
import { ref, computed } from 'vue';


const date = new Date();
const currentMonthIndex = ref(date.getMonth());
const currentYear = ref(date.getFullYear());

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const openDays = ref([2,3,8,9,10,15,20,21,22,25,26,30,31]); // Дни, когда магазин открыт

const currentMonth = computed(() => {
  return monthNames[currentMonthIndex.value];
});

const daysInMonth = computed(() => {
  const days = new Date(currentYear.value, currentMonthIndex.value + 1, 0).getDate();
  return Array.from({length: days}, (_, i) => i + 1);
});

const increaseMonth = () => {
  if (currentMonthIndex.value === 11) {
    currentMonthIndex.value = 0;
    currentYear.value += 1;
  } else {
    currentMonthIndex.value += 1;
  }
};

const decreaseMonth = () => {
  if (currentMonthIndex.value === 0) {
    currentMonthIndex.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonthIndex.value -= 1;
  }
};

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonthIndex.value, 1).getDay();
});

const isOpen = (day) => {
  return openDays.value.includes(day);
};

const currentDayName = computed(() => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[new Date().getDay()];
});

const currentDate = ref(new Date().toLocaleDateString());
const tasks = ref(['Суши из лосося ', 'Сашими из Тунца', 'Суши Бокс Микс','Суши Бокс Микс']);
</script>
<template>
   
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
  
    <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
        <header class="flex justify-between border-b-2 border-b-sky-900 p-2 items-center">
          <button @click="decreaseMonth" class="bg-sky-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <i class='bx bx-left-arrow-alt'></i>
        </button>
          <h2 class="text-xl font-bold">{{ currentMonth }} {{ currentYear }}</h2>
          <button @click="increaseMonth" class="bg-sky-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <i class='bx bx-right-arrow-alt'></i>
        </button>
        </header>
        <h3 class="text-xl font-bold">Выполняю заказы в Зеленые дни</h3>
        <div class="grid grid-cols-7  gap-2 mt-4 text-center font-bold">
            
          <div class="py-2">Пн</div>
          <div class="py-2">Вт</div>
          <div class="py-2">Ср</div>
          <div class="py-2">Чт</div>
          <div class="py-2">Пт</div>
          <div class="py-2">Сб</div>
          <div class="py-2">Вс</div>
        </div>
        <div class="grid grid-cols-7 gap-2 mt-4">
            <template v-for="(value, index) in (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)" :key="index">
    <div class="w-8 h-8"></div>
</template>
<button class="border-2 border-blue-800 rounded-full w-8 h-8 flex items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-1000" 
        v-for="(day,) in daysInMonth" 
        :key="day" 
        :class="isOpen(day) ? ' bg-green-600 rounded-full w-8 h-8 flex items-center justify-center' : 'bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'"
        @click="isOpen(day) && $router.push('/list')">
    {{ day }}
</button>
        </div>
      </div>
   
   
     
  <div class="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
  <header class="flex justify-between border-b-2 border-b-sky-900 p-2 items-center">
    <div>
      <h2 class="text-5xl font-bold text-blue-800 font-mono">{{ currentDate }}</h2>
      <p class="text-xl font-bold text-blue-500">{{ currentMonth }}</p>
      <h3 class="text-4xl font-bold text-blue-600">{{ currentDayName }}</h3>
    </div>
  </header>
  <h3 class="text-2xl font-bold text-red-600">Меню на Ужин</h3>
  <div class="grid grid-cols-1 gap-2 mt-4">
    <div  v-for="(task, index) in tasks" :key="index" class=" hover:-translate-y-2 hover:shadow-xl  hover:bg-sky-300 hover:text-sky-900  transition-all duration-1000 rounded-full text-xl font-bold border-4 border-blue-800 p-2">
      {{ task }}
    </div>
  </div>
</div>
  





  

      
</div> 
        
   
    
</template>