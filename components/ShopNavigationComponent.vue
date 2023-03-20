<template>
  <nav class="shop__nav">
    <h2 class="shop__subtitle">Categories</h2>
    <ul class="shop__list">
      <li class="shop__link" @click="filterCategory('all'), closeAllSublists($event)">
        <span>All</span>
      </li>
      <li class="shop__link" v-for="category in newCategories" :key="category">
        <span @click="openSublist($event), filterCategory(category)">{{ category.name }}</span>
        <ul class="shop__sublist" v-if="category.tags">
          <li class="shop__sublink" @click="filterTag(tag), setActiveSublink($event)" v-for="tag in category.tags" :key="tag">
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
  emits: ['filter-category', 'filter-tag'],

  methods: {
    openSublist(event) {
      // set the target to active
      event.target.classList.add('shop__link--active');

      // remove the active class from all other links
      const links = document.querySelectorAll('.shop__link span');
      links.forEach(link => {
        if (link !== event.target) {
          link.classList.remove('shop__link--active');
        }
      });

      // open the specific sublist
      event.target.nextElementSibling.classList.add('shop__sublist--open');

      // close all other sublists
      const sublists = document.querySelectorAll('.shop__sublist');
      sublists.forEach(sublist => {
        if (sublist !== event.target.nextElementSibling) {
          sublist.classList.remove('shop__sublist--open');
        }
      });

      const sublinks = document.querySelectorAll('.shop__sublink');
      sublinks.forEach(link => {
        if (link !== event.target) {
          link.classList.remove('shop__sublink--active');
        }
      });
    },

    closeAllSublists(event) {
      
      // remove the active class from all links
      const links = document.querySelectorAll('.shop__link span');
      
      links.forEach(link => {
        link.classList.remove('shop__link--active');
      });
      
      event.target.classList.add('shop__link--active');
      
      // close all sublists
      const sublists = document.querySelectorAll('.shop__sublist');
      sublists.forEach(sublist => {
        sublist.classList.remove('shop__sublist--open');
      });

      const sublinks = document.querySelectorAll('.shop__sublink');
      sublinks.forEach(link => {
        if (link !== event.target) {
          link.classList.remove('shop__sublink--active');
        }
      });
    },

    filterCategory(category) {
      // filter the products by the category
      this.$emit('filter-category', category);
    },

    filterTag(tag) {
      // filter the products by the tag
      this.$emit('filter-tag', tag);
    },

    setActiveSublink(event) {
      // set the target to active
      event.target.classList.add('shop__sublink--active');

      // remove the active class from all other links
      const links = document.querySelectorAll('.shop__sublink');
      links.forEach(link => {
        if (link !== event.target) {
          link.classList.remove('shop__sublink--active');
        }
      });
    }
  },

  mounted() {
    console.log(this.$parent.categories)
  },

  computed: {
    // get the categories from the parent component
    newCategories() {
      let categories = this.$parent.categories;

      // sort the categories alphabetically
      categories.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      
      return categories;
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

  .shop__link span {
    position: relative;
    cursor: pointer;
  }

  .shop__link span::before {
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

  .shop__link--active::before {
    background-color: #ce3d3db2 !important;
  }

  .shop__link:hover.shop__link span::before {
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
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .shop__sublink--active {
    border-bottom: solid 2px #CE3D3D;
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