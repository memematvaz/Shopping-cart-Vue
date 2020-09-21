<template>
    <div class="hero_carousel">
        <flickity  class="flickity" ref="flickity" :options="flickityOptions">
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
        </flickity>

            <h1>Asian Vegan Food</h1>
            <p>Pide tu comida asiática vegana</p>
    </div>
</template>
<script>
import Flickity from 'vue-flickity';
export default {
    name:'Hero',
    components: {
        Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true
      }
    }
  }
}
</script>

<style lang="scss">
    .hero_carousel {
        background: white;
        height: 100vh;
        .carousel-cell {
            width: 66%;
            height: 90vh;
            margin-right: 10px;
            border-radius: 5px;
            counter-increment: carousel-cell;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

        }
        .carousel-cell:nth-child(1){
            background-image:url(../../public/8.png);
        }
        .carousel-cell:nth-child(2){
            background-image:url(../../public/3.png);
        }
        .carousel-cell:nth-child(3){
        background-image:url(../../public/12.png);
        }
        .carousel-cell:nth-child(4){
        background-image:url(../../public/7.png);
        }
        .carousel-cell:nth-child(5){
        background-image:url(../../public/13.png);
        }
    }
    
</style>