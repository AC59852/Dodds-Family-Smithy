<template>
  <article class="cart__item">
    <img :src="product.img" alt="Product Image">
    <div class="cart__itemInfo">
      <h2 class="cartItem__title">{{ product.name }}</h2>
      <p class="cartItem__desc">{{ product.desc }}</p>
      <span class="cartItem__price">${{ product.price }}</span>
      <div class="cartItem__more">
        <button class="cartItem__remove">Remove</button>
        <NuxtLink class="cartItem__moreLink" to="/">See More Like This</NuxtLink>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ['product']
}
</script>