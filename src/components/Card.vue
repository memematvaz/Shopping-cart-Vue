<template>
    <div class="card">
        <img class="card_image" :src="dish.image" :alt="dish.name">
        <h5 class="card_title container">{{ dish.name }}</h5>
        <p class="card_description container">{{ dish.description }}</p>
        <div class="card_price-button container">
            <p class="card_price">{{ dish.price }}€</p>
            <button class="card_button" @click="addToCart()">Añadir al carro</button>
        </div>
    </div>
</template>

<script>

export default {
    name:'Card',
    props:{
        dish: {
            type: Object,
            default: () => ({}),
        },
    },
    methods:{
        addToCart(){
            this.$emit('add-cart', this.dish)
        }
    }
        
}
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';
    .card{
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0,0,0,.16);
        margin: 20px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .card_image{
            height: 150px;
            display: block;
            width: 100%;
        height: auto;
            border-radius: 10px 10px 0px 0px;
        }
        .card_title{
            @include mobile-card-title;
            margin: 20px 0px 0px 0px;
            text-transform:uppercase
        }
        .card_description{
            @include mobile-text;
        }
        .card_price-button{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            .card_price{
                @include mobile-text;
            }
            .card_button{
                @include button;
                font-size:14px;
            }
        }
    }
    @media (min-width: 768px){
    .card{
     
        max-width: 300px;
        height: 540px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .card_title{
           margin:0px;
          
        }
        .card_description{
            margin:0px;
            padding: 0px 30px;
            
        }
        .card_price-button{
          
            
            .card_price{
             margin:0px;
            }
            .card_button{
               margin:0px;
            }
        }
    }
    }
</style>