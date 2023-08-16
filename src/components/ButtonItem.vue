<template>
    <button class="ul__li__button" type="button"><slot /></button>
</template>

<style scoped>
    .ul__li__button {
        min-width: 80px;
        min-height: 44px;
        font: inherit;
        font-size: 18px;
        background-color: #f8f8f8;
        border-radius: 8px;
        border: none;
    }
    
</style>