<template>
  <div>
    <app-header/>
      <div class="container">
          <!-- <ContactForm /> -->
          <Validation />
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