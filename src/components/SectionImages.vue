<template>
    <section class="sect-1 back-light shadow"><slot /></section>
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
            flex-direction: column;
            width: 60vw;
        }
    }

    @media (min-width: 1200px) {
        .sect-1 {
            margin: 20px 0 0 150px ;
            padding-bottom: 50vh;
            width: 42vw;
        }
    }
</style>