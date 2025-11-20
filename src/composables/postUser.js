import { reactive,ref } from 'vue';
import axios from 'axios';
import {useToast} from 'vue-toast-notification';

const postUser = (user) =>{

const $toast = useToast();
const loading = ref(false);


const submitForm = ()=>{
    loading.value=true;
    axios({
        method:"POST",
        url:"http://localhost:3000/users",
        data:user
    }).then(()=>{
        $toast.success('Başardın!');
    }).catch(()=>{
        $toast.error('Bir şeyler ters gitti!');
    }).finally(()=>{
        loading.value=false;
    })
}


    return {loading,submitForm}
}

export default postUser;