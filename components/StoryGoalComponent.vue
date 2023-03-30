<template>
  <div class="goal__wrapper">
    <img :src="goal.img" alt="" class="goal__bck">
    <h4>{{ goal.title }}</h4>
  </div>
</template>

<script>
export default {
  props: ['goal']
}
</script>

<style>

</style>