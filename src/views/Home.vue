<template>
  <div class="home">
    <Header/>
    <Hero/>
    <Main/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Main,

  },
};
</script>
