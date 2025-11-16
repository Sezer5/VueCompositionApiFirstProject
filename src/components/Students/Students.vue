<template>
    <StudentsList :students="students"/>
</template>

<script setup>
    import StudentsList from '@/components/Students/StudentsList.vue'
    const props=defineProps(['students'])
</script>

<style>

</style>