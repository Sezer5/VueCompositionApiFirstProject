<template>
  <div>
    <app-header/>
      <div class="container">
          <!-- <Person :name="data.name" :lastName="data.lastName" :personAge="data.age" @update-lastname="updateLastname"/> -->
          <!-- <button @click="updateName">Adı Güncelle</button>
          <h1>{{name}}</h1> -->
          <!-- <Students /> -->
         <Studentscore>
              <h3>Slot Dersi</h3>
              <template v-slot:name>
                
                <ul>
                    <li v-for="student in students" :key="student.id">
                        <span>{{student.name}} :</span><span>{{student.score}}</span>
                    </li>
                </ul>
              </template>
              <template v-slot:example>
                <h2>Deneme Slotu</h2>
              </template>
         </Studentscore>
         <button @click="activeComp=StudentOne">Öğrenci 1</button>
         <button @click="activeComp=StudentTwo">Öğrenci 2</button>
         <!-- <StudentOne v-if="activeComp === StudentOne" />
         <StudentTwo v-if="activeComp === StudentTwo" /> -->
         <component :is="activeComp"></component>
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
import StudentOne from '@/components/StudentsMath/StudentOne.vue'
import StudentTwo from '@/components/StudentsMath/StudentTwo.vue'
import {ref,shallowRef} from 'vue'

const activeComp = shallowRef(StudentOne)
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