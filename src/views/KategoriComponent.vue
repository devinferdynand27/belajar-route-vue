<template>
    <div>
        <br>
        <center><h1>Kategori Kami</h1><br>
       </center>
        <div class="flex-container mx-auto px-6 ">
<div style="margin: 3px;"  v-for="kategori in state" :key="kategori.id"  class="w-full mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col shadow  items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="kategori.gambar" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{kategori.nama}}</h5>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a  href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <router-link class="container" :to="{name : 'Subkategori' , params : {id_kategori:kategori.id}}">Lihat</router-link></a>
            <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> -->
        </div>
    </div>
</div>
       </div> 
    </div>
    <br><br>
</template>
<script>
import {onMounted ,reactive} from 'vue'
import { kategori } from '@/assets/Kategori.js'
export default {
    setup(props,context){
        const state = reactive(kategori['kategori'])

        
        onMounted(() => {
            context.emit("id-menu", 4);
        });
        return{
            state
        }
    }
}
</script>

<style scoped>
.flex-container{
    display: flex;
    flex-wrap: wrap;
}
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3ms;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card::hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container{
    padding: 1px 16px;
}
</style>