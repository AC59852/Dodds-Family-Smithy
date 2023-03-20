<template>
  <section class="shop">
    <ShopNavigationComponent :categories="categories" @filter-category="filterCategory" @filter-tag="filterTag"></ShopNavigationComponent>
    <div class="shop__container">
      <h1 class="shop__title" v-if="activeCategory === 'all'">Our Products</h1>
      <h1 class="shop__title" v-else>Our {{ activeCategory }}</h1>
      <section class="shop__products">
        <ShopProductComponent v-show="product.hidden !== true" v-for="product in products" :key="product" :product="product"></ShopProductComponent>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      product: 'Products',

      categories: [],
      tags: [],
      activeCategory: 'all',
    }
  },

  async setup() {
    const { client } = usePrismic()

    const { data: products } = await useAsyncData('product', () => client.getAllByType('product'))

    console.log(products)

    return {
      products
    }
  },
  
  mounted() {
    this.categories = this.products.map(product => product.data.category)

    console.log(this.categories)

    // prevent duplicate categories
    this.categories = this.categories.filter((category, index) => this.categories.indexOf(category) === index)

    // convert the categories to objects, and add the tag from the item to the category
    this.categories = this.categories.map(category => {
      return {
        name: category,
        tags: this.products.filter(product => product.data.category === category).map(product => product.data.tag)
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
        if (product.data.category !== category.name) {
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
        if (product.data.tag === tag && product.data.category === this.activeCategory) {
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