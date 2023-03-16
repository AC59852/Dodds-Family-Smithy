<template>
  <article class="cart__item">
    <div class="cart__img">
      <img :src="product.img" alt="Product Image">
    </div>
    <div class="cart__itemInfo">
      <h2 class="cartItem__title">{{ product.name }}</h2>
      <p class="cartItem__desc">{{ product.desc }}</p>
      <span class="cartItem__price">${{ product.price }}</span>
      <div class="cartItem__more">
        <button class="cartItem__remove">Remove</button>
        <span class="cartItem__pipe">|</span>
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
<style scoped>
.cart__item {
  width: 100%;
  position: relative;
  display: flex;
  margin: 2rem 0;
}

.cartItem__price {
  position: absolute;
  top: 0.4rem;
  right: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: white;
}

.cart__img {
  width: 50%;
  max-width: 230px;
  align-self: flex-start;
  position: relative;
}

.cart__img::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.cart__img img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cart__itemInfo {
  width: 60%;
  padding-left: 2rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}

.cartItem__title {
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
}

.cartItem__desc {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.93rem;
  color: #BABABA;
  margin-bottom: 1rem;
  line-height: 180%;
}

.cartItem__more {
  margin-top: auto;
}

.cartItem__remove, .cartItem__moreLink, .cartItem__pipe {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
}

.cartItem__pipe {
  margin: 0 0.5rem;
  cursor: default;
}

.cartItem__remove:hover, .cartItem__moreLink:hover {
  text-decoration: underline;
}
</style>