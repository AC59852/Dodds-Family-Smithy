<template>
  <div class="wrapper">
    <NavComponent></NavComponent>
    <slot />
    <FooterComponent></FooterComponent>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore'

const { items } = storeToRefs(useCartStore())
const { fetchItems } = useCartStore()

fetchItems()
</script>