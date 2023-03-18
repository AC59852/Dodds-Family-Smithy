// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxtjs/prismic'],

  prismic: {
    endpoint: 'https://dodds-test.cdn.prismic.io/api/v2',
  },

  swiper: {
    modules: ['autoplay', 'pagination']
  },
  
  build: {
    transpile: ['gsap']
  },

  css: [
    '@/assets/css/main.css',
  ],

})
