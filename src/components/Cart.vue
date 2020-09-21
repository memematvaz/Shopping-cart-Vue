<template>
    <div>
        <div :class="isCartOpen ? 'cart_black' : 'closedCart' "></div>
        <div :class="isCartOpen ? 'openedCart' : 'closedCart' ">
            <ul>
                <li class="cart_item" v-for="item in itemList" :key="item.id">
                    <img class="cart_item-image" :src="item.data.image" :alt="item.data.image">
                    <div class="cart_item-text-container">
                        <h4 class="cart_item-title">{{item.data.name}}</h4>
                        <p class="cart_item-text">{{item.data.price}}€   x{{item.quantity}}  </p>
                    </div>
                    <button class="cart_item-button-x" @click="removeItem(item)">x</button>
                </li>
            </ul>
            <div class="cart_item-button">
                <h4 class="cart_total">Total: <span>{{ total }}€</span> </h4>
                <button class="cart_pay-button" @click="pay()">Comprar</button>
            </div>
            
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
    .cart_black{
        height: calc(100% - 60px);;
        width: 100vw;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.9;
        margin-top:60px;
    }
    .openedCart{
        display:block;
        position:fixed;
        z-index: 99;
        background-color: white;
        width: 300px;
        height: calc(100% - 60px);
        margin: 13px 0 0 160px;
        padding: 20px;
        transform: translate(-133%);
        box-shadow: -9px 8px 10px rgba(0,0,0,.16);
        border-top: 1px solid #f1f1f1;
        overflow-y: auto;
        
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
                    @include title;
                    padding: 0px 10px;
                    text-align: left;
                }
                .cart_item-text{
                    @include text;
                    font-size: 16px;
                    padding: 0px 10px;
                    text-align: left;
                }
            }
            .cart_item-button-x{
                    @include button;
                    font-size: 16px;
                    padding: 1px 6px;      
                }
          }
          .cart_item-button{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            .cart_total{
                @include title;
                padding: 0px 10px;
                text-align: left;
                span{
                    @include text;
                    font-weight: 400;
                }
            }
            .cart_pay-button{
                @include button;
                font-size:14px;
            }
          }
    }
    @media (min-width: 768px){
        .cart_black{
            height: calc(100% - 80px);;
            background-color: black;
            margin-top:80px;
        }
        .openedCart{
            width: 500px;
            margin: 18px 0 0 160px;
            transform: translate(-108%);
            padding: 20px 80px 0px 20px;
            .cart_item{
                .cart_item-image{
                    height: 80px;
                    width: 70px;
                }
                .cart_item-text-container{
                width: 200px;
                }
            }
        }
    }
    @media (min-width: 1200px){
        .openedCart{
            width: 600px;
            margin: 18px 0 0 160px;
            transform: translate(-100%);
            padding: 20px 100px 0px 50px;
            .cart_item{
                .cart_item-image{
                    height: 90px;
                    width: 80px;
                }
                .cart_item-text-container{
                    width: 240px;
                }
            }
        }
    }

</style>