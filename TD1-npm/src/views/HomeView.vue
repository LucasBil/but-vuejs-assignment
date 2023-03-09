<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import { store } from "../store";

let search = ref("");

function FilterMemes() {
    console.log(search);
    return store.addmemes.filter((meme) => {
        return meme.name.toLowerCase().includes(search.value.toLowerCase());
    });
}

</script>

<template>
    <input v-model="search" placeholder="search" class="border-solid p-3 border-red-400 rounded-lg border-2 fixed bottom-3 left-[5vw] w-[90vw]" type="text">

    <td class="grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3">
        <Card v-for="meme in FilterMemes()" :name="meme.name" :url="meme.url" />
    </td>

</template>
