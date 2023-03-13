<template>
  <section class="product__singleImg">
    <article class="product__text product__text--small">
      <h2 class="product__title product__title--small">Materials</h2>
      <p class="product__para">We take pride in using only the highest quality materials to craft our skinning knives, using premium grade steel that is carefully selected for its durability, hardness, and resistance to wear and tear. For the handle, we select materials that are both comfortable and durable.</p>
      <div class="product__list product__list--materials">
        <h3 class="product__title product__title--sub">Material List:</h3>
        <ul class="product__materials">
          <li class="product__material">1095 Carbon Blade Steel</li>
          <li class="product__material">Brass Pins</li>
          <li class="product__material">Ebony Wood</li>
        </ul>
      </div>
    </article>
    <img src="/products/axe_grass.jpg" alt="Image 1" class="product__img product__img--single">
  </section>
</template>
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

.product__para, .product__title--sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  color: white;
}

.product__list {
  margin-top: 70px;
  margin-bottom: 80px;
}

.product__title--sub {
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.product__materials {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 100px;
}

.product__material {
  font-size: 1.13rem;
  margin-bottom: 10px;
  position: relative;
  padding-left: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: white;
}

.product__material::before {
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