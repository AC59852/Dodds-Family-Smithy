// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper',],
  swiper: {
    modules: ['autoplay', 'pagination']
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.css',
  ],

})
