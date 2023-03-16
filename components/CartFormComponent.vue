<template>
  <form action="" class="cart__form">
      <div class="cartForm__wrapper">
        <label for="name" class="cartForm__label">Name</label>
        <input type="text" name="name" placeholder="Name (Required)" id="name" required class="cartForm__input cartForm__input--name">
      </div>
      <div class="cartForm__wrapper">
        <label for="email" class="cartForm__label">Email</label>
        <input type="email" placeholder="Email (Required)" name="email" id="email" required class="cartForm__input cartForm__input--email">
      </div>
      <div class="cartForm__wrapper">
        <label for="address" class="cartForm__label">Address</label>
        <input type="text" placeholder="Address (Required)" name="address" id="address" required autocomplete="address" class="cartForm__input cartForm__input--address">
      </div>
      <div class="cartForm__wrapper">
        <label for="city" class="cartForm__label">City</label>
        <input type="text" name="city" placeholder="City (Required)" id="city" required autocomplete="city" class="cartForm__input cartForm__input--city">
      </div>
      <div class="cartForm__wrapper">
        <label for="message" class="cartForm__label">Message</label>
        <textarea name="message" id="message" cols="30" maxlength="300" rows="10" class="cartForm__input cartForm__input--message" placeholder="Message (Optional)"></textarea>
      </div>
      <button type="submit" class="cartForm__submit">Place Request</button>
    </form>
</template>
<style scoped>
.cart__form {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cartForm__wrapper {
  display: flex;
  flex-direction: column;
}

.cartForm__label {
  display: none;
}

.cartForm__input {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 13px;
  box-sizing: border-box;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: 400;
  background: transparent;
  border: solid 2px white;
}

.cartForm__input::placeholder {
  color: #BABABA;
  opacity: 1;
}

.cartForm__input:focus {
  outline: none;
  border: solid 2px #CE3D3D;
}

.cartForm__input:-webkit-autofill,
.cartForm__input:-webkit-autofill:hover, 
.cartForm__input:-webkit-autofill:focus, 
.cartForm__input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #161616 inset !important;
    -webkit-text-fill-color: white !important;
    /* cursor white */
    caret-color: white;
}

.cartForm__submit {
  width: 90%;
  margin: 0 auto;
  border: none;
  padding: 18px;
  box-sizing: border-box;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: bold;
  background: #CE3D3D;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cartForm__submit:hover {
  box-shadow: 0 0 10px 4px #CE3D3D;
}
</style>