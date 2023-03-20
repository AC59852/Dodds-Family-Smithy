<template>
  <section class="product__dualImg">
    <!-- prismic-image dual_image_1 -->
    <prismic-image class="product__img product__img--tall" :field="slice.primary.dual_image_1" />
    <article class="product__text product__text--small">
      <prismic-image :field="slice.primary.dual_image_2" alt="Second Product Image" class="product__img product__img--small" />
      <h2 class="product__title product__title--small">{{ slice.primary.dual_image_title[0].text }}</h2>
      <prismic-rich-text :field="slice.primary.dual_image_text" class="product__para" />
    </article>
  </section>
</template>
<script>
export default {
  name: 'DualImage',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
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
  display: flex;
  flex-direction: column;
  gap: 15px;
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