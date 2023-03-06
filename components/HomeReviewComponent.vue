<template>
  <div class="home__review">
    <div class="review__heading">
      <h3>{{ review.name }}</h3>
      <span>Order: {{ review.order.quantity }} {{ review.order.item }}</span>
      <div class="review__stars">
        <img v-for="star in review.stars" :key="star" src="" alt="star">
      </div>
    </div>
    <p class="review__body">
      {{ review.text }}
    </p>
  </div>
</template>
<script>
export default {
  props: ['review']
}
</script>