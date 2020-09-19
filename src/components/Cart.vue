<template>
    <div>
        <ul>
            <li v-for="item in itemList" :key="item.id">{{item.data.name}} {{item.data.price}}€ x{{item.quantity}}  
                <button @click="removeItem(item)">x</button>
            </li>
        </ul>
        <div>
            <h4>Total: {{ total }}€</h4>
        </div>
        <button @click="pay()">Comprar</button>
    </div>
</template>

<script>
import store from '../store.js';

export default {
    name:'Cart',
    data(){
      return{
       itemList:store.itemList,
       
      }
    },
    computed:{
        total(){
            return this.itemList.reduce((acc, item) => acc + Number(item.data.price*item.quantity), 0)
        }
    },
    methods:{
        removeItem(item){
            this.itemList = this.itemList.filter(element => element.id != item.data.id)            
         },
        pay(){
             this.itemList = [];
             alert("Su compra ha sido realizada")
         }
    }
}
</script>