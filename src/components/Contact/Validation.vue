<template>
    <div>
        <Form>
            <div class="mb-3">
                <label>Ad:</label>
                <Field :rules=[isRequired,validateName] name="name" class="form-control" placeholder="Adınızı Giriniz"/>
                <ErrorMessage name="name" as="div" v-slot="{message}">
                    <div class="alert alert-danger"> 
                        {{message}}
                    </div>
                </ErrorMessage>
            </div>
            <button class="btn btn-primary">Kaydet</button>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field , ErrorMessage } from 'vee-validate';

const isRequired = (value)=>{
    if(!value){
        return 'Bu alan zorunludur!'
    }
    return true;
}

const validateName = (value)=>{
    if(value==='osman'){
        return 'Bu isim girilemez!'
    }
    return true;
}

</script>

<style>

</style>