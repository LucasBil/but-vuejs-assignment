<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import EditMeme from "../components/EditMeme.vue";
import { store } from "../store";

let search = ref("");

let editmeme = ref({});

function FilterMemes() {
    return store.addmemes.filter((meme) => {
        return meme.name.toLowerCase().includes(search.value.toLowerCase());
    });
}

function EditsMeme(event) {
    console.log(event);
    store.edit = true;
    editmeme.value = event;
}

</script>

<template>
    <input v-model="search" placeholder="search" class="border-solid p-3 border-red-400 rounded-lg border-2 fixed bottom-3 left-[5vw] w-[90vw]" type="text">

    <td class="grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3">
        <Card v-for="meme in FilterMemes()" :meme="meme" @emit-meme="EditsMeme($event)" />
    </td>

    <EditMeme v-if="store.edit" :_meme="editmeme"/>

</template>
