<template>
    <header class="header container">
        <div class="header_logo-container" id="return-home">
            <img class="header_icon" src="../../public/logo.png" alt="Logo">
            
        </div>
        <div class="header_cart-container">
            <img class="header_icon"   :class="{'header_icon-openedCart' : isCartOpen}" src="../../public/cart.png" alt="Carrito"  @click.prevent="toggle">
            <Cart  :isCartOpen="isCartOpen"/>
        </div>
       
    </header>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
    name:'Header',
    components: {
    Cart,
  },
   data(){
      return{
       isCartOpen: false,
      }
  },
    computed:{
        itemList() {
            return this.$store.getters.itemList;
        },
    },
   methods: {
    toggle() {
        this.isCartOpen = !this.isCartOpen
    }
   },
   watch: {
       itemList(value) {
           console.log('animar icono carrito')
       }
   }
}
</script>
<style lang="scss">
    .header{
     width: 100%;
     height: 60px;
     top:0px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     position: fixed;
     z-index: 1;
     background-color: #fff;
     box-shadow: -9px 8px 10px rgba(0,0,0,.16);
     
     .header_icon{
        height: 30px; 
        filter: invert(25%) sepia(3%) saturate(2652%) hue-rotate(83deg) brightness(92%) contrast(83%);
        cursor: pointer;
        &:hover{
            transition: 0.3s;
            filter: invert(0%) sepia(65%) saturate(0%) hue-rotate(207deg) brightness(98%) contrast(103%);
        }
        &:active, &:visited{
            filter: invert(57%) sepia(17%) saturate(599%) hue-rotate(83deg) brightness(97%) contrast(90%);
        }
     }
     .header_icon-openedCart{
        filter: invert(57%) sepia(17%) saturate(599%) hue-rotate(83deg) brightness(97%) contrast(90%);
        &:hover{
             filter: invert(57%) sepia(17%) saturate(599%) hue-rotate(83deg) brightness(97%) contrast(90%);
        }
     }
    }
    
</style>