<template>
    <div>
        <h2>Kişi Bİlgileri</h2>
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

<style>

</style>