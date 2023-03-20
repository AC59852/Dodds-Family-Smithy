<template>
  <main class="cart">
    <section class="cart__items">
      <div class="cart__heading">
        <h1 class="cart__title cart__title--order">Your Order</h1>
        <span class="cart__price">Price</span>
      </div>
      <div class="cart__itemList">
        <p class="cart__empty" v-if="cartProducts === undefined || null || cartProducts.length === 0">
          Looks like Your cart is empty. Browse <NuxtLink to="/shop" class="cart__link">here</NuxtLink> to add items to your cart.
        </p>
        <CartItemComponent v-for="product in cartProducts" :key="product" :product="product"  @updateQuantity="updateQuantity" @remove-from-cart="removeFromCart(product)"></CartItemComponent>
      </div>
      <span class="cart__info">
      <p>*Please view below our process for fulfilling requests, as every order is custom.</p>
      <p>*Due to the large volume of orders, we are currently only accepting one item per request.</p>
    </span>
    </section>
    <CartFormComponent :cartProducts="cartProducts"></CartFormComponent>
  </main>
  <section class="cart__process">
    <h2 class="cart__title cart__title--process">Order Process:</h2>
    <ul class="cart__list">
      <li class="cart__processItem">Upon placing your request, your ticket will be added to our queue and you will receive an email stating we've received your request.</li>
      <li class="cart__processItem">We will send a follow-up message to the email you provided, confirming the order and notifying you about your position and potential wait times, as well as working out a payment option.</li>
      <li class="cart__processItem">After confirmation, we'll start working on your order, creating the incredible products you chose.</li>
      <li class="cart__processItem">Once the products are crafted and quality-tested, we will email you that the items are complete, finalizing payment and shipping.</li>
      <li class="cart__processItem">We will then ship your order to the provided location, sending you the tracking number and any other information needed.</li>
    </ul>
  </section>
</template>
<script>
import { useCartStore } from '@/stores/cartStore'
export default {
  data() {
    return {
      cartProducts: this.products.results
    }
  },

  async setup() {
    const { items } = useCartStore()
    const { client } = usePrismic()

    // get all products from prismic that match the ids in the cart
    let {data: products} = await useAsyncData('product', () => client.getByUIDs('product', items))

    products = products.value;
    return {
      products
    }
  },

  methods: {
    removeFromCart(product) {
      console.log('remove from cart')

      const { removeFromCart } = useCartStore()
      removeFromCart(product.uid)
      
      this.cartProducts = this.cartProducts.filter(item => item.id !== product.id)

      console.log(this.cartProducts)
    },

    updateQuantity(item) {

      let quantity = item.quantity

      // find the product in cartProducts that matches the quantity.uid
      let product = this.cartProducts.find(product => product.uid === item.uid)

      product.quantity = quantity
    }
  }
  
}
</script>
<style scoped>
  .cart, .cart__process {
    width: 90%;
    max-width: 1900px;
    margin: 0 auto;
  }

  .cart {
    display: flex;
    margin-top: 11rem;
    position: relative;
  }

  .cart__items {
    width: 60%;
    margin-right: 2rem;
  }

  .cart__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart__title {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'League Spartan', sans-serif;
    color: white;
  }

  .cart__title--order {
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  .cart__price {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    color: white;
  }

  .cart__empty {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    color: white;
    margin: 0;
    padding: 2rem 0;
  }

  .cart__link {
    color: #FF6262;
  }

  .cart__itemList {
    border-top: solid 2px #FF6262;
    border-bottom: solid 2px #FF6262;
    padding: 0.5rem 0;
  }

  .cart__info {
    margin: 3rem 0;
    width: 100%;
    color: #BABABA;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cart__title--process {
    font-size: 4rem;
    margin-bottom: 2.4rem;
  }

  .cart__list {
    padding: 0;
    margin: 0;
    list-style: disc;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    color: white;
    padding-left: 1.4rem;
  }

  .cart__processItem {
    margin-bottom: 1.6rem;
    position: relative;
    width: 60%;
    line-height: 180%;
  }
</style>