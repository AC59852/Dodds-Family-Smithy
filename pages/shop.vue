<template>
  <section class="shop">
    <ShopNavigationComponent></ShopNavigationComponent>
    <div class="shop__container">
      <h1 class="shop__title">Our {{ product }}</h1>
      <section class="shop__products">
        <ShopProductComponent v-for="product in products" :key="product.id" :product="product"></ShopProductComponent>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      product: 'Products',

      products: [
        {id: 0, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'}
      ]
    }
  }
}
</script>