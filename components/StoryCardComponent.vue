<template>
  <li class="values__card">
    <h3>0{{ value.id }}. {{ value.title }}</h3>
    <p>{{ value.text }}</p>
  </li>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped>
.values__card {
  width: 28%;
  padding: 1.7rem;
  box-sizing: border-box;
  background-color: #202020;
  color: white;
}

.values__card h3 {
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 32px;
  width: fit-content;
}

.values__card h3::after {
  content: '';
  display: block;
  width: 160%;
  height: 2px;
  background-color: #FF6262;
  margin-top: 10px;
}

.values__card p {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 190%;
  margin-top: 20px;
  width: 100%;
}
</style>