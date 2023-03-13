<script setup>
    import { onMounted, ref } from "vue";
    import axios from "axios";
    import { store } from "../store";

    defineProps({
        _meme: {
            type: Object,
            required: true
        }
    })

    let memes = ref([]);
    var status_request = ref(false);
    let _name = ref('');
    let _url = ref('');

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

    function Edit(meme)
    {
        console.log(_url.value);
        store.addmemes[meme.id] = {
            id: meme.id,
            name: _name.value,
            url: _url.value
        }
        store.edit = false;
    }

</script>

<template>
    <div class="fixed flex flex-col justify-center align-middle items-center bottom-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)]">
        <div class="w-1/2 h-[75%] bg-white p-3 rounded-lg gap-3 grid grid-rows-[repeat(9,minmax(0,1fr))] items-center">
            <div>
                <h1>Name :</h1>
                <input v-model="_name" :placeholder="_meme.name" class="border-solid p-2 rounded-lg border-2 w-full" type="text">
            </div>
            <select @change="_url = $event.target.value" name="" id="" class="p-3">
                <option v-for="meme in memes" :value="meme.url" :selected="_meme.url == meme.url">{{ meme.name }}</option>
            </select>
            <img class="object-contain row-span-6 w-full h-full" :src="(_url == '')?_meme.url:_url" alt="">
            <button @click="Edit(_meme)" class="border bg-gray-200 rounded-lg p-3">Edit</button>
        </div>
    </div>
</template>