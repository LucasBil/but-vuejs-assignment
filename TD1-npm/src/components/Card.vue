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

</script>

<template>
    <div>
        <div class="flex flex-col p-3 gap-3 m-3 rounded-xl shadow-2xl justify-center">
            <h1 class="flex justify-center">{{ name }}</h1>
            <img class="object-contain w-full h-full" :src="url" alt="">
        </div>
    </div>
</template>