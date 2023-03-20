<template>
  <article class="cart__item">
    <div class="cart__img">
      <prismic-image :field="product.data.product_image" />
    </div>
    <div class="cart__itemInfo">
      <h2 class="cartItem__title">{{ product.data.product_name[0].text }}</h2>
      <prismic-rich-text class="cartItem__desc" :field="product.data.product_description" />
      <span class="cartItem__price">${{ product.data.product_price }}</span>
      <div class="cartItem__more">
        <button class="cartItem__remove" @click="removeFromCart">Remove</button>
        <span class="cartItem__pipe">|</span>
        <div class="cartItem__quantity">
          <span class="cartItem__quantLabel">Quantity:</span>
          <button @click="increaseQuantity" class="cartItem__quantBtn cartItem__quantBtn--plus">+</button>
          <span class="cartItem__quantNum">{{ quantity }}</span>
          <button @click="decreaseQuantity" class="cartItem__quantBtn cartItem__quantBtn--minus">-</button>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { useCartStore } from '@/stores/cartStore'
export default {
  props: ['product'],
  emits: ['updateQuantity'],

  data() {
    return {
      quantity: 1
    }
  },

  setup() {
    const cartStore = useCartStore()

    return {
      cartStore
    }
  },

  mounted() {
    console.log(this.product.data)

    // get the first item in product.data.product_description with the type of paragraph
    const productDesc = this.product.data.product_description.find((desc) => desc.type === 'paragraph')

    console.log(productDesc.text.length)

    // if the length of the product description is greater than 100
    if (productDesc.text.length > 196) {
      // set the text to the first 100 characters
      productDesc.text = productDesc.text.substring(0, 196) + '...'
    }
  },

  methods: {
    removeFromCart() {
      this.$emit('remove-from-cart', this.product)
    },

    increaseQuantity() {
      // if quantity is less than 5
      if (this.quantity < 5) {
        this.quantity++

        this.$emit('updateQuantity', {uid: this.product.uid, quantity: this.quantity })
      }
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--

        this.$emit('updateQuantity', {uid: this.product.uid, quantity: this.quantity })
      }
    }
  }
}
</script>
<style scoped>
.cart__item {
  width: 100%;
  position: relative;
  display: flex;
}

.cartItem__price {
  position: absolute;
  top: 0.4rem;
  right: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: white;
}

.cart__img {
  width: 50%;
  max-width: 230px;
  align-self: flex-start;
  position: relative;
}

.cart__img::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.cart__img img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cart__itemInfo {
  width: 60%;
  padding-left: 2rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}

.cartItem__title {
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
}

.cartItem__desc {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.93rem;
  color: #BABABA;
  margin-bottom: 1rem;
  line-height: 180%;
}

:deep().cartItem__desc *:not(p) {
  display: none;
}

.cartItem__more {
  margin-top: auto;
  display: flex;
  align-items: center;
}

.cartItem__remove, .cartItem__moreLink, .cartItem__pipe, .cartItem__quantLabel {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
}

.cartItem__pipe {
  margin: 0 0.5rem;
  cursor: default;
}

.cartItem__remove:hover, .cartItem__moreLink:hover {
  text-decoration: underline;
}

.cartItem__quantity {
  display: flex;
  align-items: center;
}

.cartItem__quantBtn {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  margin: 0 0.5rem;
}

.cartItem__quantNum {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: white;
  background: none;
  border: solid 1px white;
  padding: 0.4rem 0.5rem;
  text-decoration: none;
  margin: 0 0rem;
}
</style>