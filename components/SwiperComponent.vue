<template>
  <Swiper
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
    <img :src="image.src" class="swiper__image" />
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
    height: 200px;
    margin: 0 auto;
  }

  .home__swiper {
    height: 450px;
    padding-bottom: 45px !important;
  }
  
  .home__swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home__swiper .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border: solid 1px #fff;
    background-color: transparent;
    opacity: 1;
    transition: all 0.3s;
  }

  .home__swiper .swiper-pagination-bullet-active {
    background-color: #fff;
  }
</style>
