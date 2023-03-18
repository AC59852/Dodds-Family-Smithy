<template>
  <section class="product__text product__text--large">
    <h2 class="product__title">{{ slice.primary.large_text_title[0].text }}</h2>
    <prismic-rich-text class="product__para" :field="slice.primary.large_text_content" />
  </section>
</template>
<script>
export default {
  name: 'ProductText',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.product__text--large {
  width: 75%;
  margin: 190px auto 0;
}

.product__title {
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 6rem;
  color: white;
  margin: 24px 0 16px;
}

.product__para {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  color: white;
  margin: 0;
  line-height: 190%;
}
</style>