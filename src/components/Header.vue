<template>
    <header class="header">
        <div class="header_logo-container" id="return-home">
            <img src="" alt="">
        </div>
        <div class="header_cart-container">
            <img src="" alt="">
            <Cart :itemList="itemList"/>
        </div>
    </header>
</template>

<script>
import store from '../store.js';
import Cart from '@/components/Cart.vue';

export default {
    name:'Header',
    components: {
    Cart,
  },
   data(){
      return{
       itemList:store.itemList,
      }
  },
}
</script>