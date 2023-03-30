<template>
  <div class="family__container">
    <div class="family__wrapper">
      <div class="family__text">
        <h4>{{ activeMember.name }}</h4>
        <p>{{ activeMember.text }}</p>
      </div>
      <div class="family__nav">
        <img @click="prevMember(activeMember)" src="@/assets/chevron-down.svg" alt="">
        <span class="family__title">{{ activeMember.title }}</span>
        <img @click="nextMember(activeMember)" src="@/assets/chevron-down.svg" alt="">
      </div>
    </div>
    <img :src="activeMember.img" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      family: [
        { id: 1, name: 'Dalton Dodds', title: 'The Son', text: 'Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque.', img: '/' },
        { id: 2, name: 'Joshua Dodds', title: 'The Brother', text: 'Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque.', img: '/' },
        { id: 3, name: 'Linda Dodds', title: 'The Mother', text: 'Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque.', img: '/' },
        { id: 4, name: 'Bill Dodds', title: 'The Father', text: 'Lorem ipsum dolor sit amet consectetur. Augue dolor eget lacinia pretium diam in fusce cursus. Vulputate pretium netus est et consectetur congue maecenas ipsum. Purus nibh porta vivamus mattis morbi viverra proin in. At mi duis feugiat fringilla metus. Scelerisque rhoncus eget eu volutpat ipsum purus. Euismod nulla facilisi varius pellentesque.', img: '/' },
      ],

      activeMember: 0
    }
  },

  mounted() {
    this.activeMember = this.family[0]
  },

  methods: {
    nextMember(member) {
      if (member.id < this.family.length) {
        this.activeMember = this.family[member.id]
      } else {
        this.activeMember = this.family[0]
      }
    },

    prevMember(member) {
      if (member.id > 1) {
        this.activeMember = this.family[member.id - 2]
      } else {
        this.activeMember = this.family[this.family.length - 1]
      }
    }
  }
}
</script>

<style>

</style>