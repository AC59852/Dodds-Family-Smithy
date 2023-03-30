<template>
  <div class="goal__wrapper">
    <img :src="goal.img" alt="" class="goal__bck">
    <h4 class="goal__title">{{ goal.title }}</h4>
  </div>
</template>

<script>
export default {
  props: ['goal']
}
</script>

<style scoped>
.goal__wrapper {
  width: 33%;
  max-width: 530px;
  height: 680px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.goal__bck {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.goal__title {
  font-family: 'League Spartan', sans-serif;
  font-size: 72px;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 80%;
  line-height: 130%;
}
</style>