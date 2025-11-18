<template>
  <div>
    <app-header/>
      <div class="container">
          <!-- <ContactForm /> -->
          <!-- <Validation /> -->
           <div>
              <button @click="activeComp=Users">Kullanıcılar</button>
              <button @click="activeComp=AddUser">Kullanıcı Ekle</button>
           </div>
           <component :is="activeComp"/>
      </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
<script setup>
import Footer from '@/components/Fixed/Footer.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'
import Validation from '@/components/Contact/Validation.vue'
import Users from '@/components/User/Users.vue'
import AddUser from '@/components/User/AddUser.vue'
import { shallowRef } from 'vue'

const activeComp = shallowRef(Users)




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