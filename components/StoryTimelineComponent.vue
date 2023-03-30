<template>
  <div class="timeline__wrapper">
    <ul>
      <li class="timeline__dot" @click="changeActive(dot)" v-for="dot in timeline" :key="dot.id"></li>
    </ul>
    <article class="timeline__text">
      <h4 class="timeline__title">{{ activeTimeline.title }}</h4>
      <p class="timeline__para">{{ activeTimeline.text }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        { id: 1, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 2, title: 'The Early Days', text: `This is text to help me tell if the content is changing` },
        { id: 3, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 4, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 5, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 6, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
      ],

      activeTimeline: 0
    }
  },

  mounted() {
    this.activeTimeline = this.timeline[0]
  },

  methods: {
    changeActive(dot) {
      this.activeTimeline = dot
    }
  },
}
</script>

<style scoped>
.timeline__wrapper ul {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timeline__wrapper ul::before {
  content: '';
  width: 100%;
  height: 3px;
  background-color: #FF6262;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.timeline__dot {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: #FF6262;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
}

.timeline__dot:hover {
  cursor: pointer;
  transform: scale(1.4);
}

.timeline__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 6rem;
}

.timeline__title {
  font-size: 64px;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  margin-bottom: 1.4rem;
}

.timeline__para {
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 200%;
  width: 65%;
  max-width: 1400px;
  margin: 0 auto;
  height: 160px;
}
</style>