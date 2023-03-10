<template>
  <nav class="shop__nav">
    <h2 class="shop__subtitle">Categories</h2>
    <ul class="shop__list">
      <li class="shop__link">All</li>
      <li class="shop__link" @click="openSublist($event)" v-for="item in items" :key="item">
        {{ item.name }}
        <ul class="shop__sublist" v-if="item.subitems">
          <li class="shop__sublink" v-for="subitem in item.subitems" :key="subitem">
            {{ subitem.name }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Swords',
          subitems: [
            {
              name: 'Short Swords'
            },
            {
              name: 'Long Swords'
            },
            {
              name: 'Two-Handed Swords'
            }
          ]
        },
        {
          name: 'Axes'
        },
        {
          name: 'Maces'
        },
        {
          name: 'Decorations'
        }
      ]
    }
  },
  methods: {
    openSublist(event) {
      // open the specific sublist
      event.target.querySelector('.shop__sublist').classList.toggle('shop__sublist--open');
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