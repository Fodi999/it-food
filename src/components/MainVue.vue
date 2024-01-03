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
              <a class="text-gray-600 hover:text-gray-900" href="#"></a>
              <button @click="downloadImage1" class="flex items-center space-x-1 border-1 rounded-full font-bold py-1.5 px-1.5 border-sky-800 text-sky-800 hover:text-white hover:bg-sky-900" onClick={handleDownload}>
              <img class="w-8 h-8 cursor-pointer transition-transform hover:scale-110" src="/Ellipse 1.png" alt="feis" />
              <span class="px-2 text-xs">Download-CV</span>
              </button>
              <button @click="downloadImage2" class="flex items-center space-x-1 border-1 rounded-full font-bold py-1.5 px-1.5 border-sky-800 text-sky-800 hover:text-white hover:bg-sky-900" onClick={handleDownload}>
              <img class="w-8 h-8 cursor-pointer transition-transform hover:scale-110" src="/Ellipse 50.png" alt="feis" />
              <span class="px-2 text-xs">Menu esigen & Menu dewelopment</span>
              </button>
              <button @click="downloadImage1" class="flex items-center space-x-1 border-1 rounded-full font-bold py-1.5 px-1.5 border-sky-800 text-sky-800 hover:text-white hover:bg-sky-900" onClick={handleDownload}>
              <img class="w-8 h-8 cursor-pointer transition-transform hover:scale-110" src="/Ellipse 50.png" alt="feis" />
              <span class="px-2 text-xs">New Recipes & Tehnical cards & Staff training</span>
              </button>
              <div class="ml-auto relative text-sky-800">
              
             
             </div>


             
            </div>
          </div>
          </main>

</template>