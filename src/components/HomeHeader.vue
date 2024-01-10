<script>
import { useI18n } from 'vue-i18n'

export default {
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
  }
}
</script>
<template>
     <nav class="md:flex items-center">
          
          <ul class="text-gray-500 font-semibold inline-flex items-center">
            
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram text-2xl   text-sky-900'></i>
          </a>
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-facebook-circle text-2xl   text-sky-900'></i>
          </a>
          <button class=" text-sky-900 text-xs" @click="toggleLanguage"><i class=' m-2 bx bx-globe transition-transform hover:scale-150 text-2xl  text-sky-900  '></i>{{ locale }}</button>
           </ul>
        </nav>
</template>