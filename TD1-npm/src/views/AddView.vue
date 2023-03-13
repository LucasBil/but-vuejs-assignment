<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { store } from "../store";
import Card from "../components/Card.vue";

let memes = ref([]);
var status_request = ref(false);

let name = ref('');
let search = ref('');

onMounted(async () => {
    axios.get('')
    .then((response) => {
        memes.value = response.data['data']['memes'];
        memes.value.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        status_request.value = true;
    })
    .catch((error) => {
        console.log(error);
    });
});

function FilterMemes() {
    return memes.value.filter((meme) => {
        return meme.url.toLowerCase().includes(search.value.toLowerCase());
    });
}

function AddMeme(){
    store.addmemes.push(
        {
            id: store.addmemes.length,
            name: name.value,
            url: search.value
        }
        )
    console.log(store.addmemes);
    }
</script>

<template>
    <div v-if="status_request" class="flex flex-col m-3 gap-3">
        <div class="border flex flex-col gap-3 p-3 align-middle justify-center items-center">
            <div>
                <h1>Nom</h1>
                <input v-model="name" class="border pl-3 py-1 rounded-lg " type="text">
            </div>
            <select v-model="search" class="w-1/3" name="" id="">
                <option value="" disabled selected>Quelle image voulez-vous ?</option>
                <option v-for="meme in memes" :value="meme.url">{{ meme.name }}</option>
            </select>
            <RouterLink :to="{name:'home'}">
                <button @click="AddMeme()" type="submit">Ajouter</button>
            </RouterLink>
        </div>
        <div class="border">
            <Card v-for="meme in FilterMemes()" :meme="meme" />
        </div>
    </div>
</template>