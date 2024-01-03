<template>
   <div class="photo-gallery">
  <a v-for="photo in sortedPhotos" :key="photo.id" class="lg:w-1/3 bg-gra h-96 mb-4 relative group rounded inline-block overflow-hidden" href="#">
    <img class="w-full h-auto transition-opacity duration-300 group-hover:opacity-40" :src="photo.url" :alt="photo.title" />
    <div class="p-4 absolute bottom-0 left-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h2 class="text-2xl font-semibold text-sky-950 cursor-pointer leading-tight">IT&Cook-Fodifood</h2>
      <div class="flex mt-3">
        <img class="h-10 w-10 rounded-full mr-2 object-cover" src="/Ellipse 1.png" alt="">
      </div>
      <p class="font-semibold text-sky-950 text-sm">Domian Fomin</p>
      <time class="text-sky-950 normal-case text-xs">
        Этот Блог написан для тех, кто готов открыть для себя восхитительные комбинаций вкусов.
        Хочу рассказать и научить вас готовить новые блюда, которые я придумываю и готовлю для того, чтоб удивить вас,
        и поделится с вами идеями и вкусами.
      </time>
      <p class="text-sm">{{ formatDate(photo.publishDate) }}</p>
      <router-link to="/about">
        <button class="flex justify-center ml-64">
          <i class='cursor-pointer transition-transform hover:scale-110 bx bx-log-in-circle bx-md text-red-700'></i>
        </button>
      </router-link>
    </div>
  </a>
</div>
  </template>
  
  <script>
  export default {
    props: {
      photos: Array, // Передавайте массив фотографий в качестве свойства
    },
    computed: {
      sortedPhotos() {
        // Сортируем фотографии по дате в обратном порядке
        return [...this.photos].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      },
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  
  
  
  