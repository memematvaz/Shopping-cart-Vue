<template>
  <div class="main">
    <div class="main_card-list" v-for="dish in dishes" :key="dish.id">
        <Card :dish="dish"></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import dishes from '@/services/dishes.json';

export default {
  name: 'Main',
  components: {
    Card,
  },
  data(){
      return{
       dishes
      }
  }
};
</script>