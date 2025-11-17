<template>
    <form @submit.prevent="submitForm">
        <div class="row">
            <h1>İletişim</h1>
            <hr>
            <div class="mb-3">
                <label>Ad</label>
                <input type="text" class="form-control" v-model="formData.name">
            </div>
            <div class="mb-3">
                <label>Soyad</label>
                <input type="text" class="form-control" v-model="formData.lastName">
            </div>
            <div class="mb-3">
                <h4>Cinsiyet</h4>
                <div class="form-check">
                    <input type="radio" class="form-check-input" v-model="formData.gender" value="woman">
                    <label for="">Kadın</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" v-model="formData.gender" value="man">
                    <label for="">Erkek</label>
                </div>
            </div>
            <div class="mb-3">
                <label>Email</label>
                <input type="email" class="form-control" v-model="formData.email">
            </div>
            <div class="mb-3">
                <label>Konu</label>
                <input type="text" class="form-control" v-model="formData.subject">
            </div>
            <div class="mb-3">
                <h4>Hangi Amaçla Yazıyorsunuz?</h4>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="formData.goals" value="livetrainings">
                    <label for="form-check-label">Canlı Eğitimler</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="formData.goals" value="videotrainings">
                    <label for="form-check-label">Video Eğitimler</label>
                </div>
            </div>
            <div class="mb-3">
                <label>Mesajınız</label>
                <textarea class="form-control" id="" cols="30" rows="3" v-model="formData.message"></textarea>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary">Gönder</button>
            </div>
        </div>
    </form>
</template>

<script setup>
    import { reactive } from 'vue';

    const formData = reactive({
        name:'',
        lastName:'',
        gender:'man',
        email:'',
        subject:'',
        goals:[],
        message:''

    });

    const submitForm = ()=>{
        console.log(formData);
    }
</script>

<style>

</style>