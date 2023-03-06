<template>
  <main class="cart">
    <section class="cart__items">
      <div>
        <h1 class="cart__title cart__title--order">Your Order</h1>
        <span class="cart__price">Price</span>
      </div>
      <div class="cart__itemList">
        <CartItemComponent v-for="product in products" :key="product.id" :product="product"></CartItemComponent>
      </div>
    </section>
    <form action="" class="cart__form">
      <div class="cartForm__wrapper">
        <label for="name" class="cartForm__label">Name</label>
        <input type="text" name="name" id="name" required class="cartForm__input cartForm__input--name">
      </div>
      <div class="cartForm__wrapper">
        <label for="email" class="cartForm__label">Email</label>
        <input type="email" name="email" id="email" required class="cartForm__input cartForm__input--email">
      </div>
      <div class="cartForm__wrapper">
        <label for="address" class="cartForm__label">Address</label>
        <input type="text" name="address" id="address" required autocomplete="address" class="cartForm__input cartForm__input--address">
      </div>
      <div class="cartForm__wrapper">
        <label for="city" class="cartForm__label">City</label>
        <input type="text" name="city" id="city" required autocomplete="city" class="cartForm__input cartForm__input--city">
      </div>
      <div class="cartForm__wrapper">
        <label for="message" class="cartForm__label">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" class="cartForm__input cartForm__input--message"></textarea>
      </div>
      <button type="submit" class="cartForm__submit">Place Order</button>
    </form>
  </main>
  <section class="cart__process">
    <h2 class="cart__title cart__title--process">Order Process:</h2>
    <ul class="cart__list">
      <li class="cart__item">Upon placing your request, your ticket will be added to our queue and you will receive an email stating we've received your request.</li>
      <li class="cart__item">We will send a follow-up message to the email you provided, confirming the order and notifying you about your position and potential wait times, as well as working out a payment option.</li>
      <li class="cart__item">After confirmation, we'll start working on your order, creating the incredible products you chose.</li>
      <li class="cart__item">Once the products are crafted and quality-tested, we will email you that the items are complete, finalizing payment and shipping.</li>
      <li class="cart__item">We will then ship your order to the provided location, sending you the tracking number and any other information needed.</li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: [
        { id: 0, 
          name: 'Buck Knife', 
          desc: 'Handcrafted design with a razor-sharp blade, ergonomic handle, and durable materials for easy and efficient use.', 
          price: 95.99, 
          img: '/'
        },
      ]
    }
  }
}
</script>