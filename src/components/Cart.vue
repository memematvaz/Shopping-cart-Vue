<template>
    <div>
        <ul>
            <li v-for="item in itemList" :key="item.id">{{item.data.name}} {{item.data.price}}€ x{{item.quantity}}</li>
        </ul>
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
  
}
</script>