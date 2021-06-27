<template>
  <div class="container">
    <Logo />
    <section>
      <Hero />
      <h1>{{$route.query.id.toUpperCase()}}</h1>
      <div class="tabs"></div>
    </section>
    <Nav />
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Nav from "@/components/Nav.vue";
import Hero from "@/components/Hero.vue";
export default {
  name: "Expense",
  components: {
    Logo,
    Nav,
    Hero,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  position: relative;
}
section {
  height: 85vh;
  width: 100%;
  padding: 3rem;
}
h1 {
  padding: 2rem;
}
</style>