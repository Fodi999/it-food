<script setup>
import { ref, computed } from 'vue';
import HomeButton from '@/components/HomeButton.vue';
import HomeHeader from '@/components/HomeHeader.vue';

const date = new Date();
const currentMonthIndex = ref(date.getMonth());
const currentYear = ref(date.getFullYear());

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const openDays = ref([2,3,8,9,10,15,20,21,22,25,26,30,31]); // Дни, когда магазин открыт
 // Дни, когда магазин закрыт

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
</script>
<template>
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
<button class="border-2 border-blue-800 rounded-full w-8 h-8 flex items-center justify-center" 
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
<button class="border-2 border-blue-800 rounded-full w-8 h-8 flex items-center justify-center" 
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
<button class="border-2 border-blue-800 rounded-full w-8 h-8 flex items-center justify-center" 
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
<button class="border-2 border-blue-800 rounded-full w-8 h-8 flex items-center justify-center" 
        v-for="(day,) in daysInMonth" 
        :key="day" 
        :class="isOpen(day) ? ' bg-green-600 rounded-full w-8 h-8 flex items-center justify-center' : 'bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'"
        @click="isOpen(day) && $router.push('/list')">
    {{ day }}
</button>
        </div>
      </div>
  
  
</div> 
        
   
    
</template>