<template>
  <div>
    <app-header/>
      <div class="content">
          <hr>
          Content Kısmı
          <h1>{{name}}</h1>
      </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
<script setup>
import Footer from '@/components/Fixed/Footer.vue'
import {ref} from 'vue'
    // export default{
    //     setup(){
    //       const name='Sezer Ünalmış';
    //       return {name};
    //     }

    // }
    const name=ref('Sezer');

</script>
<style>
    h1{
      color:green;
    }
</style>