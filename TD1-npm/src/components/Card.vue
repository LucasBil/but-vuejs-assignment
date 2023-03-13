<script setup>

    defineProps({
        meme : {
            type: Object,
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
            <h1 class="flex justify-center">{{ meme.name }}</h1>
            <img class="object-contain w-full h-full" :src="meme.url" alt="">
            <button @click="EmitMeme(meme)" class="flex border border-black rounded-lg justify-center">Modifier</button>
        </div>
    </div>
</template>