<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="h-[20vh] flex justify-center items-center bg-black text-white">
    <h1 class="font-bold text-xl">Meme's Word</h1>
  </div>
  <div class="flex pl-3 py-1 gap-3">
    <RouterLink :to="{name:'home'}" >Home</RouterLink>
    <RouterLink :to="{name:'about'}">About</RouterLink>
    <RouterLink :to="{name:'add'}">Add</RouterLink>
  </div>

  <RouterView />
</template>