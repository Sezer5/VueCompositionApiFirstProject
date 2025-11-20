<template>
    <div v-if="loading">
        <app-loading />
    </div>
    <form class="mt-4" @submit.prevent="submitForm" v-if="!loading">
        <div class="form-group">
            <label>Ad</label>
            <input type="text" v-model="user.name" class="form-control">
        </div>
        <div class="form-group">
            <label>Soyad</label>
            <input type="text" v-model="user.lastname" class="form-control">
        </div>

        <button type="submit" class="btn btn-primary">Kaydet</button>
    </form>
</template>

<script setup>
import { reactive,ref } from 'vue';
import postUser from '@/composables/postUser'

    const user = reactive({
        name:'',
        lastname:''
    });
    const {loading,submitForm}=postUser(user)
</script>

<style>

</style>