<template>
    <form>
        <div class="row">
            <h1>İletişim</h1>
            <hr>
            <div class="mb-3">
                <label>Ad</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label>Soyad</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <h4>Cinsiyet</h4>
                <div class="form-check">
                    <input type="radio" class="form-check-input">
                    <label for="">Kadın</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input">
                    <label for="">Erkek</label>
                </div>
            </div>
            <div class="mb-3">
                <label>Email</label>
                <input type="email" class="form-control">
            </div>
            <div class="mb-3">
                <label>Konu</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <h4>Hangi Amaçla Yazıyorsunuz?</h4>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input">
                    <label for="form-check-label">Canlı Eğitimler</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input">
                    <label for="form-check-label">Video Eğitimler</label>
                </div>
            </div>
            <div class="mb-3">
                <label>Mesajınız</label>
                <textarea class="form-control" id="" cols="30" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary">Gönder</button>
            </div>
        </div>
    </form>
</template>

<script setup>

</script>

<style>

</style>