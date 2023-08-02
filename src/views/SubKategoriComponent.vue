<template>
    <div>
        <div class="flex-container">
            {{ Subkategori.nama }}
            <div v-for="produk in data" :key="produk.id" class="card">
                <router-link class="container" :to="{name : 'Detail' , params : {id_produk:produk.id}}">
                    <h2>{{produk.nama}}</h2>
                </router-link>
            </div>
       </div> 
    </div>

     <div v-if="data.length == []">
         tidak ada
     </div>
    
</template>

<script>
import {onMounted ,reactive} from 'vue'
import { produk } from '@/assets/Produk.js'
import { kategori } from '../assets/Kategori'
export default {
    props:[
        'id_kategori'
    ],

    setup(props,context){

        const Subkategori = kategori.kategori.find((item) => {
            return item.id == props.id_kategori
        });
        const data = produk.produk.filter((a) => {
            return Subkategori.id == a.id_kategori;  
        })
        onMounted(() => {
            context.emit("id-menu", 4);
        });
        return{
            Subkategori,data
        }
    },
}
</script>