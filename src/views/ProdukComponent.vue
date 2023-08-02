<template>
    <br>
    <center><h1>Produk Kami</h1><br>
    <hr style="width: 30%;"></center>
   <div class="flex-container">
   <div v-for="produk in state" :key="produk.id" class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
     <center>   <img class="object-cover" v-bind:src='produk.image' alt="product image" style="border-radius: 20px;" /></center>
      <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"> {{ produk.diskon }} </span>
    </a>
  
    
    <div class="mt-4 px-5 pb-5">
      {{ nama(produk.id_kategori) }}
      <a href="#">
        <h5 class="text-xl tracking-tight text-slate-900">{{produk.nama}}</h5>
      </a>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-3xl font-bold text-slate-900">{{produk.harga}}</span>
        </p>
      </div>
      <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      <router-link class="container" :to="{name : 'Detail' , params : {id_produk:produk.id}}">beli</router-link>
      </a
      >
    </div>
  </div>
</div>

</template>
<script>
import {onMounted ,reactive} from 'vue'
import { kategori } from '../assets/Kategori'
import { produk } from '@/assets/Produk.js'
export default {
    setup(props,context){
        const state = reactive(produk['produk'])
        
    

        const nama = (y) => {
          let  kategoriall = kategori.kategori.find(item => {
            return item.id == y
          })
          return kategoriall.nama
        }
    
        onMounted(() => {
            context.emit("id-menu", 3);
        });
        return{
            state,nama
        }
    }
}
</script>
<style scoped>
.flex-container{
    display: flex;
    flex-wrap: wrap;
}
</style>