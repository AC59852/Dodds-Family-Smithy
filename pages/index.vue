<template>
  <div class="home">
    <section class="home__hero">
      <img src="~/assets/dodds_hero-compressed.webp" class="hero__image" alt="hero image" >
      <h1 class="hero__title">Dodds Family Smithy</h1>
      <div class="hero__sub">
        <p class="hero__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad</p>
        <img src="" class="hero__arrow" alt="arrow pointing down to indicate further content below">
      </div>
    </section>
    <HomeAboutComponent></HomeAboutComponent>
    <section class="home__products">
      <h2>Featured Products</h2>
      <SwiperComponent :images="images" class="home__swiper"></SwiperComponent>
      <div class="products__explore">
        <NuxtLink to="/" class="">Explore All</NuxtLink>
      </div>
    </section>
    <section class="home__reviews">
      <HomeReviewComponent v-for="review in reviews" :key="review.id" :review="review"></HomeReviewComponent>
    </section>
    <section class="home__cta">
      <h2>Want to Learn More?</h2>
      <NuxtLink to="/">Contact Us</NuxtLink>
    </section>
  </div>
</template>
<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  export default {
    data() {
      return {
        reviews: [
          {
            id: 0, 
            name: 'Marshall Sheets', 
            stars: 5,
            order: {
              item: 'Metal Rose',
              quantity: 1,
            },
            text: 'The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work. Also you work incredibly fast. I figured it would take a bit longer to make. I look forward to seeing more of your work here in the near future.'
          },
          {
            id: 1, 
            name: 'Marshall Sheets', 
            stars: 4,
            order: {
              item: 'Metal Rose',
              quantity: 1,
            },
            text: 'The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work. Also you work incredibly fast. I figured it would take a bit longer to make. I look forward to seeing more of your work here in the near future. The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work. Also you work incredibly fast. I figured it would take a bit longer to make. I look forward to seeing more of your work here in the near future.'
          },
          {
            id: 2, 
            name: 'Marshall Sheets', 
            stars: 5,
            order: {
              item: 'Metal Rose',
              quantity: 1,
            },
            text: 'The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work. Also you work incredibly fast. I figured it would take a bit longer to make. I look forward to seeing more of your work here in the near future. The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work.'
          },
        ],
        images: [
          {id: 0, src: '/products/buck_knife.jpg', alt: 'buck knife'},
          {id: 1, src: '/products/axe_grass.jpg', alt: 'axe in grass'},
          {id: 2, src: '/products/sword_rust.jpg', alt: 'rusted sword'},
          {id: 3, src: '/products/rose.jpg', alt: 'rose'},
          {id: 4, src: '/products/axe_wood.jpg', alt: 'hatchet'},
          {id: 5, src: '/products/sword_wood.jpg', alt: 'sword on wood'},
          {id: 6, src: '/products/hatchet.jpg', alt: 'sword on wood'},
        ]
      }
    },

    mounted() {
      // create parallax for the hero image
      gsap.utils.toArray('.hero__image').forEach((image) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scroller: document.body,
            trigger: image,
            scrub: true,
            pin: false
          }
        })

        tl.from(image, {
          y: 0,
          ease: 'easeOut'
        }).to(image, {
          y: 300,
          ease: 'easeOut'
        })
      })
    }
  }
</script>
<style scoped>
  .home__hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .hero__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.55);
  }

  .hero__title {
    font-family: 'League Spartan';
    font-size: 190px;
    width: 1626px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    text-transform: uppercase;
    color: white;
  }

  .hero__sub {
    color: white;
    position: absolute;
    width: 93%;
    margin: 0 auto;
    bottom: 35px;
    display: flex;
    justify-content: space-between;
  }

  .hero__text {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 0.94rem;
    width: 980px;
    line-height: 160%;
  }

  .hero__arrow {
    width: 50px;
    height: 50px;
    object-fit: contain;
    animation: bounce 3s cubic-bezier(0.85, 0, 0.15, 1) infinite;
    background: red;
  }

  @keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.home__products {
  margin: 150px auto;
}

.home__products h2 {
  font-family: 'League Spartan';
  font-size: 100px;
  text-align: center;
  margin-bottom: 100px;
  color: white;
  font-weight: bold;
}

.products__explore {
  font-family: 'League Spartan';
  font-size: 42px;
  text-align: center;
  margin-top: 97px;
}

.products__explore a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 22px 20px 14px;
  border-bottom: solid 6px #CE3D3D;
  background: linear-gradient(transparent, transparent 50%, #CE3D3D 50%, #CE3D3D);
  background-size: 100% 200%;
  transition: background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.products__explore a:hover {
  background-position: 100% 100%;
}
</style>