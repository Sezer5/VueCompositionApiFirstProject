<template>
    <div class="personContainer">
        <h2>Kişi Bilgileri</h2>
        <ul>
            <li>
                <span>Adınız:{{ name }}</span>&nbsp;&nbsp;&nbsp;
                <span>Soyadınız:{{ lastName }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['name','lastName'])
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    .personContainer{
        border:1px solid lightblue;
        padding: 30px;
        border-radius: 30px;
    }
    ul li{
        padding:20px 0px;
        font-size:18px;
    }
    span{
        font-weight: bold;
    }
</style>