import axios from 'axios';
import {onMounted,reactive} from 'vue'
import {useToast} from 'vue-toast-notification';

const getUsers = () =>{

const $toast = useToast();
const data=reactive({
    users:[],
    loading:true
})
    const loadUsers=async()=> {
        try {
            const response = await axios.get('http://localhost:3000/users');
            data.users = response.data;
            data.loading=false;
            $toast.success('Başardın!');
        } catch (error) {
            $toast.error('Bir Şeyler Ters Gitti!');
            data.loading=false;
        }
    }




    return {
        data,loadUsers
    }

}

export default getUsers;