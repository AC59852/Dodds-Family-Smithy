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
        { id: 1, img: '/products/axe_grass.jpg', title: 'Create Incredible Products' },
        { id: 2, img: '/products/buck_knife.jpg', title: 'Create Incredible Products' },
        { id: 3, img: '/products/mace.jpg', title: 'Create Incredible Products' },
      ]
    }
  }
}
</script>

<style scoped>
.story {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 280px;
}

.story__hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: -80px;
}

@media screen and (min-width: 1600px) {
  .story__hero {
    margin-top: 40px;
  }
}

.hero__text {
  width: 50%;
  color: white;
  margin-top: -45px;
}

.hero__text h1 {
  width: 90%;
  font-size: 100px;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  line-height: 115%;
  margin-bottom: 30px;
}

.hero__text p {
  width: 65%;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 190%;
  margin-top: 15px;
}

.story__hero img {
  width: 30%;
  max-width: 515px;
  height: 740px;
  object-fit: cover;
}

h2 {
  font-family: 'League Spartan', sans-serif;
  font-size: 96px;
  font-weight: bold;
  margin-bottom: 60px;
  color: white;
}

.values__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px 38px;
}

.goals__wrapper {
  display: flex;
  justify-content: center;
}
</style>