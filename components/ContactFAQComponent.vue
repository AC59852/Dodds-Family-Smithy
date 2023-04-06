<template>
  <section class="contact__faq">
    <h2>FAQ</h2>
    <div class="faq__wrapper">
      <details v-for="question in questions" :key="question">
        <summary>{{ question.question }}</summary>
        <p v-html="question.answer"></p>
      </details>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { id: 1, question: `Are the products made of real metal?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `Will you ship my purchase?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `How will we keep in contact during the purchasing proccess?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `Can I request different materials to be used?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `Do you offer gift wrapping or gift messaging services?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `How can I contact your customer service for further assistance or inquiries?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
        { id: 1, question: `Is there warranty?`, answer: `Yes, all our products are made of high-quality metal sourced by us.` },
      ]
    }
  }
}
</script>

<style>

</style>