<script setup>


const downloadImage1 = () => {
  const imageUrl = '/Rectangle 33.png';
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'downloaded-image.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

defineExpose({
  downloadImage1
});
</script>

<template>
   <nav class=" z-30 sticky top-0 left-0 w-full  border-b-4 border-sky-900  bg-white flex justify-between items-center py-3 px-5">
        <a href="">
          <router-link class=" text-green-600" to="/">
            <button>
            <i class='bx bx-home-alt-2 bx-sm transition-transform hover:scale-150  text-sky-900 '></i>
          </button>
          </router-link>  
        </a>
        <h1 class=" sm:ml-40 uppercase font-bold text-sky-900 text-2xl" href="#">IT & Cook</h1>
        <nav class="md:flex items-center">
          <ul class="text-gray-500 font-semibold inline-flex items-center">
          <a class="flex  md:text-left " href="https://www.instagram.com/fodifood" target="_blank" rel="noopener noreferrer">
            <i class='cursor-pointer m-2 transition-transform hover:scale-150 bx bxl-instagram bx-sm  text-sky-900'></i>
          </a>
           </ul>
        </nav>
        </nav>
        <section class="flex px-8 pt-4">
          <a class="lg:flex mb-10" href="">
            <img class=" h-96  object-cover mr-4" src="/Rectangle 33.png" alt="">
            <div class="max-w-screen-xl mx-auto">
                <button @click="downloadImage1" class="flex items-center space-x-1 border-1 rounded-full font-bold py-1.5 px-1.5 border-sky-800 text-sky-800 hover:text-white hover:bg-sky-900" onClick={handleDownload}>
              <img class="w-8 h-8 cursor-pointer transition-transform hover:scale-110" src="/Ellipse 50.png" alt="feis" />
              <span class="px-2 text-xs">Dowenload & Recipe</span>
              </button>
              <div class="">
                
                <h3 class=" mt-2 mb-2 border-b border-sky-900 text-gray-700 font-bold text-2xl">Seviche with Wild Scallops and Carabineros</h3>
                
                <div class="text-gray-700 text-wrap sm:text-left mb-2">
                  
<p class="text-orange-600 font-bold text-lg">
Preparation Time: 20 minutes
Servings: 2 
</p>
<p class="text-indigo-800 font-bold">Ingredients:</p>
<ul class="p-2">
  <li class="list-disc">Carabineros (peeled) - 2 pcs.</li>
</ul>

<ul class="p-2">
  <li class="list-disc">Sea Scallops - 6 pcs.</li>
</ul>
<p></p>
<p class="text-indigo-800 font-bold">
For the Marinade:
</p>
<ul class="p-2">
  <li class="list-disc">Olive oil - 1 tbsp.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Orange - 2 pcs.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Orange pepper - 2 pinches.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Sea salt - 1/2 tsp.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Chili pepper - 1 pc.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Shallot onion (medium-sized) - 1 pc.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Cilantro - 2 sprigs.</li>
</ul>
<ul class="p-2">
  <li class="list-disc">Red caviar for garnish - 1 tbsp.</li>
</ul>
<p class="text-indigo-800 font-bold">Step-by-Step Recipe:</p>
<p class="text-indigo-800">Step 1: Prepare Seafood</p>

<p class=" underline font-bold">
Pat dry two shrimps with a paper towel and cut them into cubes.
Cut Sea Scallops into cubes as well and place them in a bowl.
</p>
<p class="text-indigo-800">Step 2: Make the Marinade</p>
<p class="underline font-bold">
Squeeze juice from oranges and strain it through a sieve into a container.
Dice shallot finely, remove seeds from chili pepper, and dice it too.
Finely chop cilantro leaves.
Add all ingredients to orange juice: shallot, chili, cilantro, salt, orange pepper, and olive oil. Mix well. 
</p>
<p class="text-indigo-800">Step 3: Marinate the Seafood</p>
<p class="underline font-bold">
Add the marinade to the diced seafood, mix well.
Put it in the refrigerator for 10 minutes to marinate. 
</p>
<p class="text-indigo-800">
Step 4: Serving 
</p>
<p class="underline font-bold">
 Arrange the marinated seafood on a plate.
Pour the remaining marinade over it.
Garnish with chili pepper, cilantro, and add red caviar.

</p>
<p class=" text-center font-bold text-orange-600 ">
Serve and enjoy!
This dish will be a delightful treat for you and your loved ones. 
Bon appétit! 
</p>
            </div>
              </div>

            </div>
          </a>
        </section>
      
      <p class=" mt-14 flex items-center justify-center text-xs  text-sky-900">&copy;2023 FoDifood-Created the design and wrote the website All rights reserved</p>
   </template>


<router-link class=" text-green-600" to="/">
 
</router-link>