<template>
  <header class="header">
    <img src="~/assets/dalton_logo.png" alt="Dodds Family Smithy Logo" class="header__logo">
    <nav class="header__nav">
      <ul class="nav__list">
        <li class="nav__item"><NuxtLink class="nav__link" to="/">Home</NuxtLink></li>
        <li class="nav__item"><NuxtLink class="nav__link" to="/">Our Story</NuxtLink></li>
        <li class="nav__item"><NuxtLink class="nav__link" to="/shop">Shop</NuxtLink></li>
        <li class="nav__item"><NuxtLink class="nav__link" to="/">Contact</NuxtLink></li>
        <li class="nav__item"><NuxtLink class="nav__link" to="/cart">Cart</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  z-index: 999;
  width: 90%;
  height: 85px;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsla(0, 0%, 0%, 0.7);
  border-radius: 900000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  box-sizing: border-box;
}
.header__logo {
  width: 72px;
}

.nav__list {
  display: flex;
  gap: 1.5rem;
}

.nav__link {
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 0.95rem;
  text-decoration: none;
  border-bottom: solid 2px transparent;
  transition: border-bottom 0.2s ease-in-out;
  padding-bottom: 2px;
}

.nav__link:hover {
  border-bottom: solid 2px white;
}
</style>