<template>
  <div id="story" class="story">
    <section class="story__hero">
      <div class="hero__text">
        <h1>We're As Simple As It Gets</h1>
        <p>We love the smaller side of life. A simple family with simple values.</p>
        <p>Get to know us further, and learn where we started and where we're going.</p>
      </div>
      <img src="@/assets/about_working.jpg" alt="">
    </section>
    <section class="story__values">
      <h2>Our Simple Values</h2>
      <ul class="values__wrapper">
        <StoryCardComponent v-for="value in values" :key="value" :value="value"></StoryCardComponent>
      </ul>
    </section>
    <section class="story__timeline">
      <h2>Our Simple Timeline</h2>
      <StoryTimelineComponent></StoryTimelineComponent>
    </section>
    <section class="story__family">
      <h2>Meet The Family</h2>
      <StoryFamilyComponent></StoryFamilyComponent>
    </section>
    <section class="story__goals">
      <h2>Our Simple Goals</h2>
      <div class="goals__wrapper">
        <StoryGoalComponent v-for="goal in goals" :key="goal" :goal="goal"></StoryGoalComponent>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [
        { id: 1, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
        { id: 2, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
        { id: 3, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
        { id: 4, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
        { id: 5, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
        { id: 6, title: "Integrity", text: "Lorem ipsum dolor sit amet consectetur. Venenatis augue quis phasellus duis sodales. Fermentum sagittis integer sed fusce. Tempus." },
      ],
      goals: [
        { id: 1, img: '/', title: 'Create Incredible Products' },
        { id: 2, img: '/', title: 'Create Incredible Products' },
        { id: 3, img: '/', title: 'Create Incredible Products' },
      ]
    }
  }
}
</script>

<style>

</style>