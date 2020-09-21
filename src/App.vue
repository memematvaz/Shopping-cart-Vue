<template>
  <div id="app">
  <Home/>
  </div>
</template>

<script>

import Home from './views/Home.vue';


export default {
  name: 'App',
  components: {
    Home,
  },
};

</script>


<style lang="scss">
 .container{
   padding: 0px 20px;

  @media (min-width: 768px){
    padding: 15px 20px;
   }
  @media (min-width: 768px){
    padding: 20px;
   }
 }
</style>
