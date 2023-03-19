<template>
  <div class="product">
    <section class="product__main">
      <div class="product__swiper">
        <img :src="images[0].src" alt="">
      </div>
      <section class="product__details">
        <h1>{{ product.data.product_name[0].text }}</h1>
        <prismic-rich-text class="product__shortDesc" :field="product.data.product_description" />
        <div class="product__btns">
          <button @click="slide()" class="product__btn product__btn--details">Learn More</button>
          <button @click="addToCart()" class="product__btn product__btn--order product__btn--link">Add to Order</button>
        </div>
      </section>
    </section>
    <!-- slice-zone dual image slice -->
    <slice-zone :slices="product.data.body" :components="{
      'dual_image': DualImage,
      'single_image': SingleImage,
      'large_text': ProductText
    }" />
    <section class="product__cta">
      <h2 class="product__title product__title--cta">Ready To Order?</h2>
      <div class="product__btns product__btns--cta">
        <button @click="toTop()" class="product__btn product__btn--cta product__btn--cta--top">Back To Top</button>
        <button @click="addToCart()" class="product__btn product__btn--cta product__btn--link">Add To Cart</button>
      </div>
    </section>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore'
import DualImage from '@/components/slices/DualImage.vue'
import SingleImage from '@/components/slices/SingleImage.vue'
import ProductText from '@/components/slices/ProductText.vue'

export default {

  async setup() {
    const route = useRoute();
    const routeProduct = route.params.product;

    const { client } = usePrismic()

    const {data: product} = await useAsyncData('product', () => client.getByUID('product', routeProduct))

    const images = product.value.data.carousel_images.map((image, index) => {
      return {
        id: index,
        src: image.carousel_image.url,
        name: image.carousel_image.alt
      }
    })

    const activeImage = images[0]
    
    console.log(product.value.data)

    return {
      product,
      images,
      activeImage
    }

  },

  data() {
    return {
      images: this.images,
      DualImage,
      SingleImage,
      ProductText
    }
  },

  mounted() {
    this.DualImage = DualImage
    this.SingleImage = SingleImage
    this.ProductText = ProductText

    setInterval(() => {
      console.log(this.images)
    }, 2000)
  },

  methods: {
    slide() {
      // scrollto product__title--small
      const el = document.querySelector('.product__title--small'),
            top = el.offsetTop - 100;
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    },

    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    addToCart() {
      const { $route } = this
      useCartStore().addToCart($route.params.product)
    }
  }
}
</script>
<style scoped>
.product {
  width: 85%;
  margin: 0 auto;
  max-width: 1900px;
}

.product__main {
  display: flex;
  justify-content: center;
  margin-top: 160px;
  gap: 20px;
}

.product__swiper {
  width: 55%;
  margin: 0 auto;
}

.swiper {
  max-width: 700px;
  height: 650px;
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
  font-size: 6.5rem;
  color: white;
  text-transform: capitalize;
  margin-top: 3%;
}

.product__shortDesc {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: white;
  margin-top: 2%;
  margin-bottom: 4%;
  line-height: 180%;
  width: 100%;
  max-width: 600px;
}

:deep() .product__shortDesc ul {
  font-size: 1.05rem;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

:deep() .product__shortDesc ul li {
  list-style: none;
  position: relative;
  padding-left: 22px;
}

:deep() .product__shortDesc ul li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  background-color: #CE3D3D;
  border-radius: 50%;
}

.product__btns {
  display: flex;
  justify-content: flex-start;
  margin-top: 2.4rem;
  gap: 22px;
}

.product__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 1.05rem;
  color: white;
  border: solid 2px #CE3D3D;
  width: 230px;
  padding: 16px 0;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  transition: all 0.2s ease;
  cursor: pointer;
  }

  .product__btn--link {
    background-color: #CE3D3D;
    font-weight: bold;
  }

  .product__btn--details {
    background-color: transparent;
    font-weight: 400;
  }

  .product__btn:hover {
    /* add a red dropshadow */
    box-shadow: 0 0 10px 4px #CE3D3D;
  }

  .product__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 210px;
    margin-bottom: 160px;
  }

  .product__title--cta {
    font-family: 'League Spartan', sans-serif;
    font-weight: bold;
    font-size: 6rem;
    color: white;
    text-transform: capitalize;
    margin-bottom: 4%;
  }

  .product__btns--cta {
    margin-top: 0;
  }

  .product__btn--cta--top {
    background: transparent;
  }

@media screen and (min-width: 2300px) {
  .swiper {
    max-width: 899px;
    height: 735px;
  }

  .product__details h1 {
    font-size: 8rem;
  }

  .product__shortDesc {
    font-size: 1.4rem;
    max-width: 765px;
  }

  :deep() .product__shortDesc ul {
    font-size: 1.4rem;
    gap: 35px;
  }

  :deep() .product__shortDesc ul li::before {
    width: 8px;
    height: 8px;
  }

  .product__btn {
    width: 250px;
    padding: 18px 0;
    font-size: 1.3rem;
  }
}
</style>