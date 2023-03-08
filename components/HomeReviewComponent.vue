<template>
  <div class="home__review">
    <div class="review__heading">
      <h3>{{ review.name }}</h3>
      <span>Order: {{ review.order.quantity }} {{ review.order.item }}</span>
      <div class="review__stars">
        <img v-for="star in review.stars" :key="star" src="~/assets/star-solid.svg" alt="star">
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
<style>
  .home__review {
    background-color: #202020;
    width: 394px;
    box-sizing: border-box;
    padding: 28px;
    border-radius: 3px;
  }

  .review__stars {
    display: flex;
    gap: 2px;
  }

  .review__stars img {
    width: 22px;
    height: 22px;
  }

  .review__heading {
    border-bottom: solid 2px #666666;
    padding-bottom: 16px;
  }

  .review__heading h3 {
    font-family: 'League Spartan', sans-serif;
    font-size: 26px;
    color: white;
    font-weight: bold;
  }

  .review__heading span {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #909090;
    font-weight: 400;
    margin: 7px 0;
    display: block;
  }

  .review__body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: white;
    font-weight: 400;
    margin: 16px 0 0;
    display: block;
    line-height: 167%;
  }
</style>