<template>
    <div class="sm:flex flex-col items-center justify-start h-screen p-4 space-y-4">
        <p class="text-xl font-bold text-gray-700 text-center">
            Поддержите сайт!
            <br>
            Помогите мне развивать кулинарный портал и создавать еще больше полезного контента. Вы можете сделать донат на мою карту.
        </p>
        <p class="sm:text-xl text-red-600 font-semibold sm:mt-2 text-center">Спасибо за вашу поддержку!</p>   
        <div class="space-y-4">
            <a href="https://www.facebook.com/messages/t/4392562200776954" class=" ml-14 px-4 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Messenger
            </a>
            <button @click="showDonate = !showDonate" class="ml-20 px-4 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Donate
            </button>
        </div>
        <transition name="slide-fade">
            <div v-if="showDonate" class="w-full max-w-xs mx-auto mt-4 bg-white shadow-md rounded px-4 sm:px-8 pt-4 sm:pt-6 pb-4 sm:pb-8 mb-4">
                <!-- Your donation form goes here -->
                <p class="text-sm sm:text-lg font-bold text-blue-600"><i class='bx bx-credit-card mr-2 text-2xl sm:text-4xl align-bottom'></i>23890000023458 Visa</p>
            </div>
        </transition>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        showDonate: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  </style>