<template>
    <div><br><br>
        <section class="bg-gray-80 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center">
                <br>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-4 space-y-4 md:space-y-6 sm:p-4">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                              Login 
                        </h1>
                       
                          <Alert v-if="alert == true" type="success" class="bg-blue float-right" closable>Login Berhasil </Alert>
                          <Alert v-else-if="alert == 'gagal'"  type="warning" closable  class="bg-red text-red float-right" style="color: red;">Akun Tidak Ada</Alert>
                       <br><br>

                        <form @submit.prevent="login" class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukan username</label>
                                <input type="text" v-model="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="masukan nama" required="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <button style="background: rgb(0, 0, 255);" @click="$emit('isLogin', true)" type="submit" class="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>                           
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                    
                </div>
            </div>
          </section>
    </div>

    

</template>
<script>

import {onMounted } from 'vue'
import { Alert } from 'flowbite-vue'
import { user } from '@/assets/user'
export default {
    components:{
        Alert
    },
    data(){
        return{
            username : '',
            password : '',
            alert : false
        }
    },

    methods:{
        login(){
             const logins = user.find(user => user.username === this.username && user.password === this.password)
             let pemanggilanindex = user.findIndex(item => {
                return item.username == this.username
             })
             if(logins){
                this.alert = true;
                 user[pemanggilanindex].isLogin = true
                 localStorage.setItem('islogin','true')
                 this.$router.push('/produk')
             }else{
                this.$router.push('/login')
             }
        }
    },
    setup(props,context){
        onMounted(() => {
            context.emit('id-menu', 5 );
        })
    }
}
</script>