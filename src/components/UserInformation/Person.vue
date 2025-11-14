<template>
    <div class="personContainer">
        <h2>Kişi Bilgileri</h2>
        <ul>
            <li>
                <span class="forProps">Adınız:{{ name }}</span>
                <span class="forProps">Soyadınız:{{ lastName }}</span>
                <span class="forProps">Yaşınız:{{ personAge }}</span>
            </li>
        </ul>
        <button @click="updateLastname">Soyadı Değiştir</button>
    </div>
</template>

<script setup>
    const emit=defineEmits(['update-lastname'])
    const props = defineProps({name:String,lastName:String,personAge:Number});
    const updateLastname = ()=>{
        // props.lastName="Deneme";
        emit('update-lastname','deneme');
    }
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
    .forProps{
        display: block;
    }
</style>