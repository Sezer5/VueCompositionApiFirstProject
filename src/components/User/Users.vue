<template>
    <div class="row">
        <div class="col-md-3 mb-4" v-for="user in data.users" :key="user.id"> 
                <div class="card" style="width: 18rem;">
                    <img :src="'http://placebeard.it/300/300/?'+user.id" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{user.name}} {{user.lastname}}</h5>                        
                    </div>
                </div>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import {onMounted,reactive} from 'vue'
const data=reactive({
    users:[],
})
    const getUser=async()=> {
        try {
            const response = await axios.get('http://localhost:3000/users');
            data.users = response.data;
        } catch (error) {
            console.error(error);
        }
        }
onMounted(()=>{
    getUser()
})
</script>

<style>

</style>