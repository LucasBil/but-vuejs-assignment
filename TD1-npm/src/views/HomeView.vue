<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

let memes = ref([]);
var status_request = ref(false);
let search = ref('');

onMounted(async () => {
    axios.get('')
    .then((response) => {
        memes.value = response.data['data']['memes'];
        status_request.value = true;
    })
    .catch((error) => {
        console.log(error);
    });
});

function FilterMemes() {
    console.log(status_request);
    return memes.value.filter((meme) => {
        return meme.name.toLowerCase().includes(search.value.toLowerCase());
    });
}
</script>

<template v-if="status_request">

    <input v-model="search" placeholder="search" class="border-solid p-3 border-red-400 rounded-lg border-2 fixed bottom-3 left-[5vw] w-[90vw]" type="text">
    <select v-model="search">
        <option v-for="meme in FilterMemes()" :value="meme.name">{{meme.name}}</option>
    </select>

    <td class="grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3">
        <td v-for="meme in FilterMemes()" class="grid grid-cols-1 justify-center md:grid-cols-2">
            <td class="flex justify-center">{{ meme.name }}</td>
            <td class="flex justify-center"><img class="object-contain" :src="meme.url" alt=""></td>
        </td>
    </td>

</template>
