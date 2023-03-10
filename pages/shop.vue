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
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import 'overlayscrollbars/overlayscrollbars.css';
export default {
  data() {
    return {
      product: 'Products',

      products: [
        {id: 0, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 1, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 2, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 3, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 4, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 5, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 6, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 7, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 8, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 9, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 10, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
        {id: 11, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg'},
      ]
    }
  },

  // mounted() {
  //   document.querySelector('.footer').style.display = 'none';
  // },

  components: {
    OverlayScrollbarsComponent
  }
}
</script>
<style scoped>
  .shop {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .shop__container {
    width: 85%;
    position: relative;
  }

  .shop__products {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 30px;
  }

  :deep() .os-scrollbar-vertical  {
    right: 9% !important;
  }

  .shop h1 {
    margin-top: 10%;
    margin-bottom: 1.5%;
    font-family: 'League Spartan', sans-serif;
    font-size: 4.8rem;
    font-weight: bold;
    color: white;
    margin-left: 3%;
  }
</style>