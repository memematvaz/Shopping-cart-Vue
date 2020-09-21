<template>
        <div :class="isCartOpen ? 'openedCart' : 'closedCart' ">
        <ul>
            <li class="cart_item" v-for="item in itemList" :key="item.id">
                <img class="cart_item-image" :src="item.data.image" :alt="item.data.image">
                <div class="cart_item-text-container">
                    <h4 class="cart_item-title">{{item.data.name}}</h4>
                    <p class="cart_item-text">{{item.data.price}}€   x{{item.quantity}}  </p>
                </div>
                <button class="cart_item-buttom-x" @click="removeItem(item)">x</button>
            </li>
        </ul>
        <div class="cart_item-buttom">
            <h4>Total: {{ total }}€</h4>
            <button @click="pay()">Comprar</button>
        </div>
        
    </div>
</template>

<script>
import '../assets/styles/main.scss';

export default {
    name:'Cart',
    props:{
        isCartOpen:{
            default: '',
        },
    },
    computed:{
        total(){
            return this.itemList.reduce((acc, item) => acc + Number(item.data.price*item.quantity), 0)
        },
        itemList() {
            return this.$store.getters.itemList;
        },
    },
    methods:{
        removeItem(item){
            this.$store.dispatch('removeFromList', item.data.id);
         },
        pay(){
            this.$store.dispatch('clearList', ).then(() => {
                alert('Tu compra ha sido realizada')
            })
        }
      }
  }

</script>
<style lang="scss">
    @import '../assets/styles/main.scss';
    .closedCart{
        display:none;
    }
    .openedCart{
        display:block;
        position:fixed;
        background-color: white;
        width: 300px;
        margin: 13px 0 0 150px;
        padding: 20px;
        transform: translate(-133%);
        box-shadow: -9px 8px 10px rgba(0,0,0,.16);
        border-top: 1px solid #f1f1f1;
    .cart_item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #f1f1f1;
        .cart_item-image{
            height: 70px;
            width: 60px;
        }
        .cart_item-text-container{
            width: 150px;
            .cart_item-title{
                @include mobile-card-title;
                padding: 0px 10px;
                text-align: left;
            }
            .cart_item-text{
                @include mobile-text;
                font-size: 16px;
                padding: 0px 10px;
                text-align: left;

            }
            
        }
        .cart_item-buttom-x{
                @include button;
                font-size: 16px;
                font-weight: 900;

                
            }
    }
    }

</style>