<script setup>
import { ref, computed } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core'
const emit = defineEmits(['sendData']);

const email = ref('')
const name = ref('')
const errors = ref([])
// const date = ref('')
const description = ref('')
const formData = ref({})
const date = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm')

const submitForm = () => {
    formData.value = {
        email: email,
        name: name,
        errors: errors,
        date: date,
        description: description
    }
    emit("sendData", formData.value)
}

const formattedName = computed({
  get: () => formData.value.name,
  set: (newValue) => {
    formData.value.name = newValue.charAt(0).toUpperCase() + newValue.slice(1);
  },
});


</script>

<template>
    <form @submit.prevent="submitForm" class="d-form">
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" />
        <label for="name">Name:</label>
        <input v-model="formattedName" id="name" />
        <fieldset>
            <legend for="error">What type of error:</legend>
            <input type="checkbox" id="content-error" value="content-error" v-model="errors">
            <label for="content-error">Content error</label>
            <input type="checkbox" id="other" value="other" v-model="errors">
            <label for="other">Other</label>
        </fieldset>
        <label for="date">Date: </label>
        <input v-model="date" type="datetime-local" id="date"/>
        <label for="description">Description of the issue</label>
        <textarea v-model="description" id="description"/>
        <button type="reset">Reset form</button>
        <button>Send form</button>
    </form>
        
</template>

<style lang="scss" scoped>
    .d-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>