<template>
  <div class="product">
    <section class="product__main">
      <SwiperComponent></SwiperComponent>
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
          <NuxtLink to="/cart" class="product__btn product__btn--details product__btn--link">Add to Order</NuxtLink>
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