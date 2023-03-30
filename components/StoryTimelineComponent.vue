<template>
  <div class="timeline__wrapper">
    <ul>
      <li class="timeline__dot" v-for="dot in timeline" :key="dot.id"></li>
    </ul>
    <article class="timeline__text">
      <h4 class="timeline__title">{{ timeline[0].title }}</h4>
      <p class="timeline__text">{{ timeline[0].text }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        { id: 1, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 2, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 3, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 4, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 5, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
        { id: 6, title: 'The Early Days', text: `Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque. Libero volutpat turpis nunc faucibus. Fringilla morbi tincidunt laoreet convallis tincidunt ac lorem.` },
      ],

      activeTimeline: null
    }
  }
}
</script>

<style>

</style>