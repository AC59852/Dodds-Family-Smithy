// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper', '@pinia/nuxt'],
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
