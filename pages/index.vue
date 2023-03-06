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
      <SwiperComponent></SwiperComponent>
      <NuxtLink to="/">Explore All</NuxtLink>
    </section>
    <section class="home__reviews">
      <HomeReviewComponent v-for="review in reviews" :key="review.id" :review="review"></HomeReviewComponent>
    </section>
    <section class="home__cta">
      <h2>Want to Learn More</h2>
      <NuxtLink to="/">Contact Us</NuxtLink>
    </section>
  </div>
</template>
<script>
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
            text: 'The rose was awesome. I expected it to be well done but I was blown away. Keep up the good work. Also you work incredibly fast. I figured it would take a bit longer to make. I look forward to seeing more of your work here in the near future.'}
        ]
      }
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
</style>