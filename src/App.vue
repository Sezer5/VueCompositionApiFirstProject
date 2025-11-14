<template>
  <div>
    <app-header/>
      <div class="container">
          <Person :name="data.name" lastName="Sezer" :personAge="data.age"/>
          <button @click="updateName">Adı Güncelle</button>
          <h1>{{name}}</h1>
      </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
<script setup>
import Footer from '@/components/Fixed/Footer.vue'
import Person from '@/components/UserInformation/Person.vue'
import {ref} from 'vue'
    // export default{
    //     setup(){
    //       const name='Sezer Ünalmış';
    //       return {name};
    //     }

    // }
    import {reactive} from 'vue'
    const data=reactive({
      name:'Sezer',
      age:'35'
    });
    const name=ref('Sezer');
    const updateName = ()=>{
      data.name='Seda';
    }

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
    button{
      padding: 10px;
      border:none;
      background-color: #40b27f;
      color:white;
      border-radius: 30px;
      margin:20px;
    }
</style>