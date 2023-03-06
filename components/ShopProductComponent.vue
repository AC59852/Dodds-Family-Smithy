<template>
  <NuxtLink to="/product/buck%20knife">
    <article>
      <img :src="product.image" alt="product image">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </article>
  </NuxtLink>
</template>
<script>
export default {
  props: ['product']
}
</script>