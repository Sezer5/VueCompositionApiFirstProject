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
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
const $toast = useToast();
const loading = ref(false);
const user = reactive({
    name:'',
    lastname:''
});

const submitForm = ()=>{
    loading.value=true;
    axios({
        method:"POST",
        url:"http://localhost:3000/users",
        data:user
    }).then(()=>{
        $toast.success('Başardın!');
    }).catch(()=>{
        $toast.error('Bir şeyler ters gitti!');
    }).finally(()=>{
        loading.value=false;
    })
}
</script>

<style>

</style>