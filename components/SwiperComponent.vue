<template>
  <Swiper v-if="$route.name === 'index'"
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="3"
    :space-between="30"
    :centered-slides="true"
    :loop="true"
    :autoplay="{
      delay: 2600,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1
    }"
  >
  <SwiperSlide v-for="image in images" :key="image.id" class="slide">
    <NuxtLink :to="`/product/${image.name}`">
      <img :src="image.src" class="swiper__image">
      <h3>{{ image.name }}</h3>
    </NuxtLink>
  </SwiperSlide>
  </Swiper>
  <Swiper v-else
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1"
    :space-between="30"
    :centered-slides="true"
    :loop="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1
    }"
  >
  <SwiperSlide v-for="image in images" :key="image.id" class="slide">
    <img :src="image.src" class="swiper__image" >
  </SwiperSlide>
  </Swiper>
</template>
<script>
export default {
  props: ['images']
}
</script>
<style>
  .swiper {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding-bottom: 45px !important;
  }

  .home__swiper {
    height: 450px;
  }

  .home__swiper .swiper-slide {
    overflow: hidden;
  }
  
  .home__swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home__swiper h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 101%;
    height: 12%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'League Spartan', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .home__swiper .swiper-slide:hover h3{
    height: 100%;
    font-size: 46px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border: solid 1px #fff;
    background-color: transparent;
    opacity: 1;
    transition: all 0.3s;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
</style>
