<script setup>

    defineProps({
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits(["emitMeme"]);

    function EmitMeme(params)
    {
        emit("emitMeme",params);
    }

</script>

<template>
    <div>
        <div class="flex flex-col p-3 gap-3 m-3 rounded-xl shadow-2xl justify-center">
            <h1 class="flex justify-center">{{ name }}</h1>
            <img class="object-contain w-full h-full" :src="url" alt="">
            <button @click="EmitMeme({'name':name,'url':url})" class="flex border border-black rounded-lg justify-center">Modifier</button>
        </div>
    </div>
</template>