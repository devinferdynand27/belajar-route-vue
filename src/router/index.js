import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/AboutComponent.vue"; 
import Contact from "@/views/ContactComponent.vue";
import Produk from "@/views/ProdukComponent.vue";
import Kategori from "@/views/KategoriComponent.vue";
import Subkategori from "@/views/SubkategoriComponent.vue";
import Detail from "@/views/DetailComponent.vue";
import Home from "@/views/HomeComponent.vue";

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about", 
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props:true
  },
  {
    path: "/Sub-Kategori/:id_kategori",
    name: "Subkategori",
    component: Subkategori,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;