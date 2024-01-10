<script>

export default {
    methods: {
        downloadImage1() {
            const imageUrl = '/Ellipse 1.png';
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'downloaded-image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        downloadImage2() {
            const imageUrl = '/Ellipse 50.png';
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'downloaded-image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },
    
};
</script>


<template>
     <main class="sm:flex">
          <div class="w:full lg:w-2/3" >
            <div class=" my-4 justify-betveen sm:flex items-center overflow-y-auto whitespace-nowrap" id="app">
              <a class="text-gray-600" href="#"></a>
              <button @click="downloadImage1" class="flex items-center space-x-2 border-2 rounded-full font-bold py-1.5 px-1.5 ml-4  border-sky-900  hover:bg-yellow-300 hover:text-sky-900  transition-all duration-1000" onClick={handleDownload}>
              <i class='text-sky-900 text-xl   cursor-pointer  transition-transform hover:scale-110 bx bx-cart-download'></i>
              <span class="px-2  text-xl  text-sky-900">{{ $t('buttonDownload') }}</span>
              </button>
             
             


             
            </div>
          </div>
          </main>

</template>