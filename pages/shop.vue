<template>
  <section class="shop">
    <ShopNavigationComponent :categories="categories" @filter-category="filterCategory" @filter-tag="filterTag"></ShopNavigationComponent>
    <div class="shop__container">
      <h1 class="shop__title" v-if="activeCategory === 'all'">Our Products</h1>
      <h1 class="shop__title" v-else>Our {{ activeCategory }}</h1>
      <section class="shop__products">
        <ShopProductComponent v-show="product.hidden !== true" v-for="product in products" :key="product.id" :product="product"></ShopProductComponent>
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
        {id: 0, name: 'Buck Knife', image: 'https://www.knivesillustrated.com/wp-content/uploads/2022/04/KI_2208_BUCK_01_jac2.jpg', category: 'knives', tag: 'buck knife'},
        {id: 1, name: 'Woodcutters Axe', image: '/products/axe_grass.jpg', category: 'axes', tag: 'woodcutting'},
        {id: 2, name: 'Sword', image: '/products/sword_wood.jpg', category: 'swords', tag: 'ornate'},
        {id: 3, name: 'Small Knife', image: '/products/buck_knife.jpg', category: 'knives', tag: 'small knife'},
        {id: 4, name: 'Axe', image: '/products/axe_wood.jpg', category: 'axes', tag: 'woodcutting'},
        {id: 5, name: 'Longsword', image: '/products/sword_rust.jpg', category: 'swords', tag: 'longsword'},
        {id: 6, name: 'Hatchet', image: '/products/hatchet.jpg', category: 'axes', tag: 'hatchet'},
        {id: 6, name: 'Steel Mace', image: '/products/mace.jpg', category: 'maces', tag: 'two-handed'},
      ],
      categories: [],
      tags: [],
      activeCategory: 'all',
    }
  },

  mounted() {
    this.categories = this.products.map(product => product.category)

    // prevent duplicate categories
    this.categories = this.categories.filter((category, index) => this.categories.indexOf(category) === index)

    // convert the categories to objects, and add the tag from the item to the category
    this.categories = this.categories.map(category => {
      return {
        name: category,
        tags: this.products.filter(product => product.category === category).map(product => product.tag)
      }
    })

    // prevent duplicate tags
    this.categories.forEach(category => {
      category.tags = category.tags.filter((tag, index) => category.tags.indexOf(tag) === index)
    })
  },

  methods: {
    filterCategory(category) {
    // hide all items that aren't in the category
    if(category === 'all') {
      this.products.forEach(product => {
        product.hidden = false
      })

      this.activeCategory = 'all'
    } else {
      this.activeCategory = category.name

      this.products.forEach(product => {
        if (product.category !== category.name) {
          product.hidden = true
        } else {
          product.hidden = false
        }
      })
    }
    },

    filterTag(tag) {
      this.products.forEach(product => {
        // if the tag is in the category, show it
        if (product.tag === tag && product.category === this.activeCategory) {
          product.hidden = false
        } else {
          product.hidden = true
        }
      })
    }
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
    justify-content: flex-start;
    width: 94%;
    margin: 0 auto;
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
    text-transform: capitalize;
  }
</style>