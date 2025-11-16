<template>
    <div>
        {{name}}
        <button @click="name='Cahit'">Değiştir</button>
        <Lifecycle v-if="showComponent"/>
    </div>
    
</template>

<script setup>
    import {ref,onMounted,onBeforeMount,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    const name = ref('Sezer');
    onBeforeMount(()=>{
        console.log('onBeforeMount Yüklendi');
    })
    onMounted(()=>{
        console.log('Yüklendi');
    })
    onBeforeUpdate(()=>{
        console.log('onBeforeUpdate');
    })
    onUpdated(()=>{
        console.log('onUpdated');
    })
    onBeforeUnmount(()=>{
        console.log('onBeforeUnmount');
    })
    onUnmounted(()=>{
        console.log('onUnmounted');
    })
</script>

<style>

</style>