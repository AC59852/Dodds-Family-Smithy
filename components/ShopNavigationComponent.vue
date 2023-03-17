<template>
  <nav class="shop__nav">
    <h2 class="shop__subtitle">Categories</h2>
    <ul class="shop__list">
      <li class="shop__link" @click="filterCategory('all')">All</li>
      <li class="shop__link" v-for="category in newCategories" :key="category">
        <span @click="openSublist($event), filterCategory(category)">{{ category.name }}</span>
        <ul class="shop__sublist" v-if="category.tags">
          <li class="shop__sublink" @click="test(tag)" v-for="tag in category.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['categories'],
  emits: ['filter-category'],

  methods: {
    openSublist(event) {
      // open the specific sublist
      event.target.nextElementSibling.classList.toggle('shop__sublist--open');

      // close all other sublists
      const sublists = document.querySelectorAll('.shop__sublist');
      sublists.forEach(sublist => {
        if (sublist !== event.target.nextElementSibling) {
          sublist.classList.remove('shop__sublist--open');
        }
      });
    },

    filterCategory(category) {
      // filter the products by the category
      this.$emit('filter-category', category);
    },

    test(tag) {
      console.log(tag);
    }
  },
  computed: {
    // get the categories from the parent component
    newCategories() {
      return this.$parent.categories;
    }
  }
}
</script>
<style scoped>
  .shop__nav {
    width: 13%;
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    padding-left: 2%;
  }

  .shop__subtitle {
    font-family: 'League Spartan', sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 70%;
    margin-bottom: 1rem;
    color: white;
  }

  .shop__list {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-left: 6%;
    margin-top: 18%;
  }

  .shop__link, .shop__sublink {
    text-transform: capitalize;
  }

  .shop__link {
    position: relative;
    cursor: pointer;
  }

  .shop__link::before {
    content: '';
    position: absolute;
    transform: translateY(50%);
    left: -18px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid #CE3D3D;
    background-color: transparent;
    transition: background-color 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .shop__link:hover.shop__link::before {
    background-color: #ce3d3db2;
  }

  .shop__sublist {
    max-height: 0;
    overflow: hidden;
    margin: 0;
    opacity: 0;
    font-size: 0.87rem;
    font-weight: 300;
    transition: opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1), max-height 0.6s cubic-bezier(0.5, 1, 0.89, 1), margin-top 0.4s cubic-bezier(0.33, 1, 0.68, 1), margin-left 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .shop__sublink {
    margin-top: 10px;
    position: relative;
    width: fit-content;
    border-bottom: solid 2px transparent;
    padding-bottom: 4px;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .shop__sublink:hover {
    border-bottom: solid 2px #CE3D3D;
  } 

  .shop__sublink::before {
    content: '';
    position: absolute;
    transform: translateY(50%);
    left: -15px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid #CE3D3D;
    background-color: transparent;
  }

  .shop__sublist--open {
    max-height: 200px;
    opacity: 1;
    margin-top: 5px;
    margin-left: 2%;
    margin-bottom: -6px;
  }
</style>