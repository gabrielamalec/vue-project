<template>
    <section class="sect-1 back-light shadow"><slot></slot></section>
</template>

<style scoped>
    .sect-1 {
        padding: 10px 0 20px;
    }
    .back-light {
        background-color: #f8f8f8;
    }
    .shadow {
        box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 720px) {
        .sect-1 {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            width: 576px;
        }
    }
</style>