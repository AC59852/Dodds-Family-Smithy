<template>
  <div class="product">
    <section class="product__main">
      <div class="product__swiper">
        <SwiperComponent :images="images"></SwiperComponent>
      </div>
      <section class="product__details">
        <h1>{{ $route.params.product }}</h1>
        <p class="product__shortDesc">Handcrafted design with a razor-sharp blade, ergonomic handle, and durable materials for easy and efficient use.</p>
        <ul class="product__bullets">
          <li>Handmade by a skill craftsmen</li>
          <li>Attention to detail and care put into every aspect</li>
          <li>Unique and detailed handle and blade design</li>
          <li>Sharp and long-lasting cutting edge, sharpened by hand</li>
          <li>Constructed from high-quality and durable materials</li>
          <li>Pride of ownership that can be passed down for generations</li>
        </ul>
        <div class="product__btns">
          <button class="product__btn product__btn--details">Learn More</button>
          <NuxtLink to="/cart" class="product__btn product__btn--order product__btn--link">Add to Order</NuxtLink>
        </div>
      </section>
    </section>
    <ProductDualImageComponent></ProductDualImageComponent>
    <ProductSingleImageComponent></ProductSingleImageComponent>
    <ProductTextComponent></ProductTextComponent>
    <section class="product__cta">
      <h2 class="product__title product__title--cta">Ready To Order?</h2>
      <div class="product__btns product__btns--cta">
        <button class="product__btn product__btn--cta">Back To Top</button>
        <NuxtLink to="/cart" class="product__btn product__btn--cta product__btn--link">Add To Cart</NuxtLink>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {id: 1, src: '/products/axe_grass.jpg', name: 'Image 1'},
        {id: 2, src: '/products/axe_grass.jpg', name: 'Image 1'},
        {id: 3, src: '/products/axe_grass.jpg', name: 'Image 1'},
        {id: 4, src: '/products/axe_grass.jpg', name: 'Image 1'},
      ]
    }
  }
}
</script>
<style scoped>
.product {
  width: 85%;
  margin: 0 auto;
}

.product__main {
  display: flex;
  justify-content: center;
  margin-top: 180px;
  gap: 80px;
}

.product__swiper {
  width: 50%;
  margin: 0 auto;
}

.swiper {
  max-width: 600px;
  height: 550px;
  margin: 0 auto;
}

.product__details {
  width: 50%;
}

:deep() .swiper__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product__details h1 {
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 6rem;
  color: white;
  text-transform: capitalize;
  margin-top: 3%;
}

.product__shortDesc {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: white;
  margin-top: 2%;
  margin-bottom: 4%;
  line-height: 180%;
  width: 100%;
  max-width: 600px;
}

.product__bullets {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 29px;
}

.product__bullets li {
  list-style: none;
  position: relative;
  padding-left: 22px;
}

.product__bullets li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: #CE3D3D;
  border-radius: 50%;
}

.product__btns {
  display: flex;
  justify-content: flex-start;
  margin-top: 8%;
  gap: 22px;
}

.product__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 1rem;
  color: white;
  border: solid 2px #CE3D3D;
  width: 210px;
  padding: 12px 0;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  transition: all 0.2s ease;
  }

  .product__btn--order {
    background-color: #CE3D3D;
    font-weight: 500;
  }

  .product__btn--details {
    background-color: transparent;
    font-weight: 400;
    cursor: pointer;
  }

  .product__btn:hover {
    /* add a red dropshadow */
    box-shadow: 0 0 10px 4px #CE3D3D;
  }

:deep().product__dualImg img, .product__singleImg img {
  width: 100%;
}
</style>