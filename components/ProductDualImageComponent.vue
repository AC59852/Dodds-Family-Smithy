<template>
  <section class="product__dualImg">
    <img src="@/assets/dodds_hero-compressed.webp" alt="First Product Image" class="product__img product__img--tall">
    <article class="product__text product__text--small">
      <img src="@/assets/dodds_hero-compressed.webp" alt="Second Product Image" class="product__img product__img--small">
      <h2 class="product__title product__title--small">Usability</h2>
      <p class="product__para">Our handcrafted buck knife is an experience like no other. The attention to detail and care put into every aspect of our knife's construction ensure that it is a high-quality, long-lasting tool that will perform its task with precision and ease. The comfortable and secure grip of the ergonomic handle makes it a pleasure to use, and the sharp and curved blade makes the task of skinning game a breeze. Owning this knife is a source of pride and pleasure for those who appreciate the art of a well-made tool.</p>
    </article>
  </section>
</template>
<style scoped>
.product__dualImg {
  display: flex;
  justify-content: center;
  margin-top: 160px;
  gap: 80px;
}

.product__img--tall {
  width: 33%;
  object-fit: cover;
  height: 700px;
  margin-top: auto;
}

.product__text {
  width: 46%;
}

.product__img--small {
  width: 100%;
  object-fit: cover;
  height: 500px;
}

.product__title {
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 6rem;
  color: white;
  margin: 24px 0 8px;
}

.product__para {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  color: white;
  margin: 0;
  line-height: 175%;
}

@media screen and (min-width: 2200px) {
  .product__dualImg {
    gap: 85px;
  }

  .product__img--tall {
    height: 990px;
    width: 40%;
  }

  .product__text {
    width: 45%;
  }

  .product__img--small {
    height: 560px;
  }

  .product__title {
    font-size: 7rem;
  }

  .product__para {
    font-size: 22px;
  }
}
</style>