<template>
  <div class="main">
    <div class="main_card-list" v-for="dish in dishes" :key="dish.id">
        <Card :dish="dish" @add-cart="addItemCart"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import dishes from '@/services/dishes.json';

export default {
  name: 'Main',
  name: 'itemList',
  components: {
    Card,
  },
  data(){
      return{
       dishes,
      }
  },
  computed: {
    itemList() {
        return this.$store.getters.itemList;
    },
  },
  methods:{
      addItemCart(dish){
        this.$store.dispatch('addToList', {
            data: dish,
            price: dish.price,
            quantity: 1,
            id: dish.id,
            image: dish.image,
        }).then(() => {
            this.$emit('move-cart', )
        });
      }
  }
};
</script>
<style lang="scss">
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        @media (min-width: 768px){
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>