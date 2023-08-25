<script setup>
    const emit = defineEmits(['showForm'])
</script>

<template>
    <div class="center">
        <button type="button" @click="emit('showForm', true)" class="m-10">Show the form</button>
        <button type="button" @click="emit('showForm', false)" class="m-10">Close the form</button>
    </div>
</template>

<style lang="scss" scoped>
    .center {
        display: flex;
        justify-content: center;
    }

    .m-10 {
        margin: 10px;
    }

</style>