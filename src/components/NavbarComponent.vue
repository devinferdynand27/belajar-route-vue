<template>  
<nav class="bg-white shadow border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </button>
    <div class="relative hidden md:block">

      <button id="search-navbar" class="bg-blue-500 text-white font-bold py-2 px-4 rounded"><router-link :class="{active:login}" :to="{name : 'Login'}">Login </router-link></button> &nbsp;
      <button id="search-navbar" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Register</button>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         
        </div>
      <center>
        <button id="search-navbar" class="bg-blue-500 text-white font-bold py-2 px-4 rounded"><router-link :class="{active:login}" :to="{name : 'Login'}">Login </router-link></button> &nbsp;
        <button id="search-navbar" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Register</button>
      </center>
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link :class="{active:rl_0}" :to="{name : 'Home'}">Home </router-link></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link :class="{active:rl_1}" :to="{name : 'About'}">about </router-link></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link :class="{active:rl_3}"  :to="{name : 'Produk'}"> Produk </router-link></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link :class="{active:rl_4}"  :to="{name : 'Kategori'}"> Kategori </router-link></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> <router-link :class="{active:rl_2}"  :to="{name : 'Contact'}">contact </router-link></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" @click="logout"> logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import {ref} from 'vue'
export default {
props:{
    idMenu : Number,
},


methods: {
  logout(){
    localStorage.setItem('islogin','false')
     this.$router.push('/login')
  }
},



setup(props){
    const rl_0 = ref(false)
    const rl_1 = ref(false)
    const rl_2 = ref(false)
    const rl_3 = ref(false)
    const rl_4 = ref(false)
    const login = ref(false)
    if(props.idMenu == 0){
        rl_0.value = true
        rl_1.value = false
        rl_2.value = false
        rl_3.value = false
        rl_4.value = false
        login.value = false
    }
    else if(props.idMenu == 1){
        rl_0.value = false
        rl_1.value = true
        rl_2.value = false
        rl_3.value = false
        rl_4.value = false
        login.value = false
    }else if(props.idMenu == 2){
      rl_0.value = false
        rl_1.value = false
        rl_2.value = true
        rl_3.value = false
        rl_4.value = false
        login.value = false
    }
    else if(props.idMenu == 3){
      rl_0.value = false
        rl_1.value = false
        rl_2.value = false
        rl_3.value = true
        rl_4.value = false
        login.value = false
    }
    else if(props.idMenu == 4){
      rl_0.value = false
        rl_1.value = false
        rl_2.value = false
        rl_3.value = false
        rl_4.value = true
        login.value = false
    }
    else if(props.idMenu == 5){
        rl_0.value = false
        rl_1.value = false
        rl_2.value = false
        rl_3.value = false
        rl_4.value = false
        login.value = true
    }
    return{
        rl_0,rl_1,rl_2,rl_3,rl_4,login
    }
},
}
</script>
<style scoped>

.active{
    color: rgb(0, 255, 0);
}
</style>