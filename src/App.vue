<template>
  <div>
    <app-header/>
      <div class="container">
          <!-- <Person :name="data.name" :lastName="data.lastName" :personAge="data.age" @update-lastname="updateLastname"/> -->
          <!-- <button @click="updateName">Adı Güncelle</button>
          <h1>{{name}}</h1> -->
          <!-- <Students /> -->
         <Studentscore>
              <ul>
                  <li v-for="student in students" :key="student.id">
                      <span>{{student.name}} :</span><span>{{student.score}}</span>
                  </li>
              </ul>
         </Studentscore>
      </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
<script setup>
import Footer from '@/components/Fixed/Footer.vue'
import Person from '@/components/UserInformation/Person.vue'
import Students from '@/components/Students/Students.vue'
import Studentscore from '@/components/Students/Studentscore.vue'
import {ref} from 'vue'
    // export default{
    //     setup(){
    //       const name='Sezer Ünalmış';
    //       return {name};
    //     }

    // }
    import {reactive,provide} from 'vue'
    const students=reactive([{
      id:1,
      name:'Sezer',
      score:65
    },
    {
      id:2,
      name:'Seda',
      score:75
    },
    {
      id:3,
      name:'Cahit',
      score:85
    }]);
    const name=ref('Sezer');
    const updateName = ()=>{
      data.name='Seda';
    }
    const updateLastname = (lastName)=>{
      data.lastName=lastName;
    }
    const updateStudent = ()=>{
      students[0].score=70;
    }
    provide('students',{students,updateStudent})
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