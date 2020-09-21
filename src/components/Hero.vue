<template>
    <div class="hero_carousel" id="start-page">
        <flickity  class="flickity" ref="flickity" :options="flickityOptions">
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
        </flickity>
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
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true,
        draggable: true,
        autoPlay: true
      }
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';
    .hero_carousel {
        background: white;
        height: 100vh;
        width: 100%;
        .carousel-cell {
            width: 66%;
            height: 95vh;
            margin-right: 10px;
            border-radius: 5px;
            counter-increment: carousel-cell;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .carousel-cell:nth-child(1){
            background-image:url(../../public/5.jpg);
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            &:before{
            text-align: center;
            content: "Pide la mejor comida asiática vegana";
            font-weight: 100;
            font-size: 40px;
            font-family: $title-font;
            color: white;
            margin: 40px 20px;
            text-shadow: black 0.1em 0.1em 0.2em
            }
        }
        .carousel-cell:nth-child(2){
            background-image:url(../../public/4.jpg);
        }
        .carousel-cell:nth-child(3){
        background-image:url(../../public/12.jpg);
        }
        .carousel-cell:nth-child(4){
        background-image:url(../../public/7.jpg);
        }
        .carousel-cell:nth-child(5){
        background-image:url(../../public/13.jpg);
        }
    }
    @media (min-width: 768px){
        .hero_carousel {
            .carousel-cell:nth-child(1){
                &:before{
                font-size: 60px;
                }
            }
        }
    }
    @media (min-width: 1200px){
        .hero_carousel {
            .carousel-cell:nth-child(1){
                &:before{
                margin: 180px;
                }
            }
        }
    }
    
</style>