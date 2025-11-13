<template>
  <div>
    <app-header/>
      <div class="container">
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
    *{
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    .container{
      min-height: 100vh;
      padding: 30px;
    }
</style>