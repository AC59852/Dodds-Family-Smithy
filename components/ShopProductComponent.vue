<template>
  <NuxtLink :to="`/product/${product.name}`" class="shop__product">
    <article>
      <img :src="product.image" alt="product image" class="shop__img">
      <h3 class="shop__name">{{ product.name }}</h3>
    </article>
  </NuxtLink>
</template>
<script>
export default {
  props: ['product']
}
</script>
<style scoped>
.shop__product {
  width: 23%;
  position: relative;
}

.shop__product::after {
  content: '';
  /* padding-bottom to make the product always a square */
  padding-bottom: 100%;
  width: 100%;
  display: block;
}

.shop__product:hover .shop__img {
  filter: brightness(0.55);
}

.shop__product:hover .shop__name {
  opacity: 1;
}

.shop__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
}

.shop__name {
  position: absolute;
  bottom: 0;
  left: 3%;
  width: 100%;
  color: #fff;
  font-size: 3.2rem;
  width: 60%;
  line-height: 109%;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}
</style>