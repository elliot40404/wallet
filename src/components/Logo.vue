<template>
  <div class="heading">
    <h1 @click="nav">WALLET</h1>
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    nav() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.heading h1 {
  font-size: 3rem;
  padding: 0.5em;
  letter-spacing: 0.5em;
  height: 5vh;
  cursor: pointer;
}
</style>