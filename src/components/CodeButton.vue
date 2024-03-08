<template>
  <div class="fixed bottom-0 right-0 z-30 mb-10 mr-4">
    <button @click="openModal" class="flex items-center justify-center space-x-2 ml-2 py-1 px-3 bg-sky-900 bg-opacity-50 font-bold rounded-full">
      <i class=' text-sky-300 text-5xl bx bx-registered'></i>
      <span class="text-white text-xl">Вести код </span>
    </button>

    <div v-if="showModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8  bg-opacity-50 rounded-lg shadow-lg w-1/2">
        <h2 class="mt-2 mb-4 text-center text-sm font-extrabold text-sky-950">Вести код для просмотра сайта</h2>
        <form @submit.prevent="submit">
          
          <label for="password" class="sr-only">Код</label>
          <p v-if="loginFailed" class="text-red-900 font-extrabold">Неверный код</p>
          <p v-if="loginSuccess" class="text-green-900 font-extrabold">Вход разрешен</p>
          <div class="relative">
    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Пароль">
    <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
      <span v-if="showPassword">Скрыть</span>
      <span v-else>Показать</span>
    </button>
  </div>
          <div v-if="!isAuthenticated">
            <button type="submit" class="group mt-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Войти</button>
          </div>
          
        </form>
        <button @click="closeModal" class="group mt-2 relative w-20 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Закрыть</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      password: '',
      isAuthenticated: false,
      loginFailed: false,
      showPassword: false, // новое свойство данных
      loginSuccess: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submit() {
      this.$store.dispatch('authenticate', this.password).then(success => {
        if (success) {
          this.loginFailed = false; // обнулите loginFailed при успешной аутентификации
        } else {
          this.loginFailed = true; // установите loginFailed в true, если аутентификация не удалась
        }
      });
    },
  }
}
</script>
