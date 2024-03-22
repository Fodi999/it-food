<script>
import { useI18n } from 'vue-i18n'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    cartItems: Array, // Или другой тип, в зависимости от того, что вы ожидаете
  },
  setup() {
    const { locale } = useI18n()

    const toggleLanguage = () => {
      locale.value = locale.value === 'pl' ? 'en' : 
                     (locale.value === 'en' ? 'ru' : 
                     (locale.value === 'ru' ? 'ua' : 'pl'));
    }

    return {
      locale,
      toggleLanguage
    }
  },
  computed: {
    ...mapGetters(['isDropDowenViseble'])
  },
  methods: {
    ...mapActions(['toggleDropDowen']),
    checkout() {
      // Здесь может быть ваш код для оформления заказа

      // Закрываем корзину
      this.toggleDropDowen();
    }
  }
}
</script>
<template>
     <nav class="hidden ml-auto md:flex items-center">
          
          <ul class="text-gray-500 font-semibold inline-flex items-center">
            
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram text-2xl   text-sky-900'></i>
          </a>
          <a class="flex   md:text-left " href="https://www.facebook.com/profile.php?id=100002546807195" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-facebook-circle text-2xl   text-sky-900'></i>
          </a>
          <button class=" text-sky-900 text-xs" @click="toggleLanguage">
            <i class=' m-2 bx bx-globe transition-transform hover:scale-150 text-2xl  text-sky-900  '></i>{{ locale }}
          </button>
           </ul>
        </nav>
        <button class="fixed right-0 top-0 inline-block md:hidden" @click="toggleDropDowen">
  <i class='text-5xl text-sky-900 pt-2 pr-4 z-0 bx bx-menu'></i>
</button>
        <div>
    <div v-if="isDropDowenViseble" class="absolute bg-white rounded-lg shadow-lg p-4 mt-2">
      <div v-for="(icon, index) in icons" :key="index" class="flex items-center space-x-2">
        <img :src="icon.image" :alt="icon.name" class="w-6 h-6">
        <p>{{ icon.name }}</p>
      </div>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          <img :src="item.image" :alt="item.name" class="cart-item-image">
          {{ item.name }} - {{ item.price }} руб.
        </li>
      </ul>
      <div class=" md:hidden fixed z-20 mt-2  w-16 h-44 mr-4 shadow-xl right-0 top-0 bg-yellow-200 rounded-full border-2 border-sky-900 p-4 cursor-pointer transition transform translate-x-0 hover:translate-x-0 hover:shadow-xl">
  <a class="flex text-left" href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
    <i class='cursor-pointer m-auto  transition-transform hover:scale-150 bx bxl-instagram text-2xl text-sky-900'></i>
  </a>
  <a class="flex text-left" href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
    <i class='cursor-pointer pt-2 m-auto transition-transform hover:scale-150 bx bxl-facebook-circle text-2xl text-sky-900'></i>
  </a>
  <button class="text-sky-900 text-xs" @click="toggleLanguage">
    <i class='m-auto pt-2 bx bx-globe transition-transform hover:scale-150 text-2xl text-sky-900'></i>{{ locale }}
  </button>
  <button class="rounded-full transition hover:-translate-y-2 hover:shadow-xl" @click="checkout">
    <i class='m-auto pl-1 pt-4 text-2xl text-sky-900 bx bx-chevron-left-circle'></i>
  </button>
  <div class="flex justify-between">
    <div class="flex flex-col justify-end h-full">
      <!-- Ваш код здесь -->
    </div>
  </div>
</div>
      </div>
    </div>
</template>