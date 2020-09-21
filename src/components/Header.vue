<template>
    <header class="header container">
        <div class="header_logo-container" id="return-home">
            <img class="header_icon" src="../../public/logo.png" alt="Logo">
            <h1 class="header_title">Asian Vegan</h1>
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
    @import '../assets/styles/main.scss';
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
     .header_logo-container{
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         .header_title{
             font-family: $title-font;
             font-size: 30px;
             font-weight: 100;
             color: $card-title;
             margin-left: 10px;
         }
         &:hover{
             .header_title{
                transition: 0.3s;
                color:black;
             }
             .header_icon{
                  transition: 0.3s;
                  filter: invert(0%) sepia(65%) saturate(0%) hue-rotate(207deg) brightness(98%) contrast(103%);
             }
         }
     }
     .header_icon{
        height: 30px; 
        filter: invert(58%) sepia(10%) saturate(1066%) hue-rotate(83deg) brightness(96%) contrast(86%);
        cursor: pointer;
        &:hover{
            transition: 0.3s;
            filter: invert(0%) sepia(65%) saturate(0%) hue-rotate(207deg) brightness(98%) contrast(103%);
        }
        &:active, &:visited{
           filter: invert(58%) sepia(10%) saturate(1066%) hue-rotate(83deg) brightness(96%) contrast(86%);
        }
     }
     .header_icon-openedCart{
        filter: invert(46%) sepia(77%) saturate(2693%) hue-rotate(124deg) brightness(96%) contrast(108%);
        &:hover{
             filter: invert(46%) sepia(77%) saturate(2693%) hue-rotate(124deg) brightness(96%) contrast(108%);
        }
     }
    }
    
</style>