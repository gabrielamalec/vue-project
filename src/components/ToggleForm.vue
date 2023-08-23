<script setup>
    const emit = defineEmits(['showForm'])
</script>

<template>
    <div class="center">
        <button type="button" @click="emit('showForm', true)">Show the form</button>
        <button type="button" @click="emit('showForm', false)">Close the form</button>
    </div>
</template>

<style lang="scss" scoped>
    .center {
        display: flex;
        justify-content: center;
    }

</style>