<script setup>

</script>

<template>
  <div>
  
    

    <router-view v-slot="{ Component }">
      <div>
        <transition name="fade">
        <component :is="Component" />
      </transition>
      </div>
     
    </router-view>
  </div>
</template>

