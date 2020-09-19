<template>
  <div class="main">
    <div class="main_card-list" v-for="dish in dishes" :key="dish.id">
        <Card :dish="dish" @add-cart="addItemCart"></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import dishes from '@/services/dishes.json';
import store from '../store.js';


export default {
  name: 'Main',
  name: 'itemList',
  components: {
    Card,
  },
  data(){
      return{
       dishes,
       itemList: store.itemList,
      }
  },
  methods:{
      addItemCart(dish){
          const index = this.itemList.map(item => item.id).indexOf(dish.id);
        if (index === -1) {
            this.itemList.push({
                data:dish,
                price: dish.price,
                quantity: 1,
                id: dish.id,
            })
        } else {
            this.itemList[index].quantity += 1;
        }
        
      }
  }
};
</script>