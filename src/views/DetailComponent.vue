<template>



    <div v-if="detail == undefined">
        tidak ada
    </div>
    <div v-else>
        <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full mb-8 md:w-1/2 md:mb-0">
                        <div class="sticky top-0 z-50 overflow-hidden ">
                            <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img :src="detail.image" alt=""
                                    class="object-cover w-full lg:h-full ">
                            </div>
                        </div>
                    </div>
                  
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="lg:pl-20">
                            <div class="mb-8 ">
                                {{ getkategoris(detail.id_kategori).nama }}
                                <h2 class="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {{detail.nama}}</h2>
                                <p class="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span>  {{detail.harga}}</span>
                                   
                                </p>
                                <p class="max-w-md text-gray-700 dark:text-gray-400">
                                  {{ detail.deksripsi }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


</template>
<script>
import { kategori } from '../assets/Kategori'
import {produk} from '@/assets/Produk'
export default {
    props:[
        'id_produk'
    ],
    setup(props){
        const detail = produk['produk'].find(function(item){
            return item.id == props.id_produk;
        });

        const getkategoris = (items) => {
            let namakategori = kategori.kategori.find((item) => {
                return items
            })
            return namakategori
        }

          console.log(getkategoris(detail.id_kategori))
        return{
            detail,getkategoris
        }
    }
}
</script>