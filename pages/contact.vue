<template>
  <section class="contact">
    <h1>Contact Us</h1>
    <form ref="contactForm" @submit.prevent="sendContact" class="contact__form">
      <div class="form__group">
        <label for="name" hidden>Name</label>
        <input v-model="name" type="text" name="name" id="name" placeholder="Name" required>
      </div>
      <div class="form__group">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" required>
      </div>
      <div class="form__group">
        <label for="message">Message</label>
        <textarea v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
      </div>
      <input type="submit" value="Send">
    </form>
    <ContactFAQComponent></ContactFAQComponent>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  methods: {
    sendContact() {
      emailjs.sendForm('service_hwdjznx', 'template_ldckeyd', this.$refs.contactForm, 'user_yM5mWxzyQShYcauGsoWXB', {
        name: this.name,
        email: this.email,
        message: this.message,
      })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    }
  }
}
</script>

<style>
  form {
    padding-top: 100px;
  }
</style>