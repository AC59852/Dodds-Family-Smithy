<template>
  <footer id="footer" class="footer">
    <section class="footer__content">
      <div class="footer__wrapper">
        <ul class="footer__roles">
          <li class="footer__role"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="footer__role"><NuxtLink to="/">Our Story</NuxtLink></li>
          <li class="footer__role"><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li class="footer__role"><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
        <ul class="footer__socials">
          <li class="footer__social"><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li class="footer__social"><a href="https://instagram.com" target="_blank">Google Business</a></li>
        </ul>
      </div>
      <div class="footer__info">
        <!-- copyright symbol -->
        <span class="footer__copy">&copy; 2023 Dodds Family Smithy</span>
        <span class="pipe">|</span>
        <!-- time -->
        <span class="footer__time">{{ timeCombined }}</span>
        <span class="pipe">|</span>
        <span class="footer__country">United States of America</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      timeZone: '',
      timeCombined: null
    }
  },

  mounted() {
    // get current time hr:min
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    // format time am and pm
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

    this.time = `${hours12}:${minutesFormatted} ${ampm}`

    // get the users time zone toLocaleTimeString
    const timeZone = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
    this.timeZone = timeZone

    this.timeCombined = `${this.time} ${this.timeZone}`

    // update time every minute
    setInterval(() => {
      this.updateTime()
    }, 60000)
  },

  methods: {
    updateTime() {
      // get current time hr:min
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()

      // format time am and pm
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const hours12 = hours % 12 || 12
      const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

      this.time = `${hours12}:${minutesFormatted} ${ampm}`

      this.timeCombined = `${this.time} ${this.timeZone}`
    }
  }
}
</script>

<style>

</style>