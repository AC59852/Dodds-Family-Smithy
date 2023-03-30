<template>
  <h3>0.{{ value.id }} {{ value.title }}</h3>
  <p>{{ value.text }}</p>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>

</style>