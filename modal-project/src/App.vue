<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div class="buttons">
    <button @click="toggleModal">Show Modal 1</button>
    <button @click="toggleModal2">Show Modal 2</button>
  </div>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grap your discount 10%</p>
    </Modal>
  </teleport>
  <div v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grap your discount 50%</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :-)",
      header: "This is header",
      text: "This is body text",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app,.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.buttons button {
  border-radius: 15px;
  padding: 10px 20px;
}
</style>
