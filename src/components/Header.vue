<template>
    <header class="header">
        <a href="#start-page">
            <div class="header_logo-container" id="return-home">
                <img class="header_icon" src="../../public/logo.png" alt="Logo">
                <h1 class="header_title">Asian Vegan</h1>
            </div>
        </a>
        <div class="header_cart-container">
            <img class="header_icon"   :class="{'header_icon-openedCart' : isCartOpen, 'cart_shaked' : shaked}" src="../../public/cart.png" alt="Carrito"  @click.prevent="toggle">
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
       shaked: false,
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
    },

   },
   watch: {
       itemList(value) {
           console.log('animar icono carrito')
            this.shaked = true;
            setTimeout(() => this.shaked = false, 1000)
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
        z-index: 99;
        background-color: #fff;
        box-shadow: -9px 8px 10px rgba(0,0,0,.16);
        padding: 15px 30px;
        .header_logo-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .header_title{
                font-family: $title-font;
                font-size: 30px;
                font-weight: 100;
                color: $details-color;
                margin-left: 10px;
            }
            &:hover{
                .header_title{
                    transition: 0.3s;
                    color:$hover-color;
                }
                .header_icon{
                    transition: 0.3s;
                    filter: invert(80%) sepia(9%) saturate(2312%) hue-rotate(50deg) brightness(89%) contrast(86%);
                }
            }
     }
     .header_icon{
        height: 30px; 
        filter: invert(58%) sepia(10%) saturate(1066%) hue-rotate(83deg) brightness(96%) contrast(86%);
        cursor: pointer;
        &:hover{
            transition: 0.3s;
         filter: invert(80%) sepia(9%) saturate(2312%) hue-rotate(50deg) brightness(89%) contrast(86%);
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
     .cart_shaked{
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
          transform: translate3d(0, 0, 0);
     }
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
    @media (min-width: 768px){
        .header{
            height: 80px;
            padding: 0px 80px;
            .header_logo-container{
                .header_title{
                    font-family: $title-font;
                    font-size: 35px;
                }
            }
            .header_icon{
                height: 40px; 
            }
      }
    }
    @media (min-width: 1200px){
        .header{
            padding: 0px 120px;
      }
    }

</style>