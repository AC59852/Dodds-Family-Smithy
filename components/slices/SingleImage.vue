<template>
  <section class="product__singleImg">
    <article class="product__text product__text--small">
      <h2 class="product__title product__title--small">{{ slice.primary.single_image_title[0].text }}</h2>
      <prismic-rich-text :field="slice.primary.single_image_text" class="product__para" />
    </article>
    <img src="/products/axe_grass.jpg" alt="Image 1" class="product__img product__img--single">
  </section>
</template>
<script>
export default {
  name: 'SingleImage',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.product__singleImg {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 160px auto 0;
}

.product__text {
  width: 57%;
}

.product__title--small {
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 6rem;
  color: white;
  margin: 24px 0 20px;
}

.product__para {
  margin: 0;
  line-height: 175%;
  width: 85%;
}

.product__para {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  color: white;
  margin-bottom: 6.2rem;
}

:deep().product__para ul {
  margin-top: 20px;
  margin-bottom: 80px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

:deep() .product__para h3 {
  font-size: 1.5rem;
  margin-top: 40px;
  font-weight: bold;
  margin-bottom: 1.4rem;
}

:deep().product__para ul li {
  font-size: 1.13rem;
  position: relative;
  padding-left: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: white;
}

:deep().product__para ul li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #CE3D3D;
}

.product__img--single {
  width: 40%;
  object-fit: cover;
}
</style>