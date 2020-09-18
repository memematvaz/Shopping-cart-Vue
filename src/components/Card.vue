<template>
    <div class="card">
        <h5 class="card_title">{{ dish.name }}</h5>
        <img :src="dish.image" :alt="dish.name">
        <p class="card_description">{{ dish.description }}</p>
        <p class="card_price">{{ dish.price }}€</p>
        <button class="card_button">Añadir</button>
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
    }
    
        
}
</script>

<style>

</style>