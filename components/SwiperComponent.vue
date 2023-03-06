<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="3"
    :space-between="30"
    :centered-slides="true"
    :loop="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
  >
  <SwiperSlide style="background-color: green;">Slide 1</SwiperSlide>
  <SwiperSlide style="background-color: yellow;">Slide 2</SwiperSlide>
  <SwiperSlide style="background-color: purple;">Slide 3</SwiperSlide>
  <SwiperSlide style="background-color: pink;">Slide 4</SwiperSlide>
  <SwiperSlide style="background-color: blue;">Slide 5</SwiperSlide>
  <SwiperSlide style="background-color: orange;">Slide 6</SwiperSlide>
  <SwiperSlide style="background-color: teal;">Slide 7</SwiperSlide>
  </Swiper>
</template>
<style>
  .swiper {
    width: 50%;
    height: 200px;
    margin: 0 auto;
    background-color: red;
  }
</style>
