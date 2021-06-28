<template>
  <div class="container">
    <Logo />
    <section>
      <Hero />
      <h1>EXPENSE</h1>
      <div class="tabs">
        <div v-for="(item, index) in inc" :key="index" class="tab" @dblclick="remove(item.id)">
          <h2>{{item.name}}</h2>
          <h2>{{new Date(item.date * 1000).toLocaleDateString()}}</h2>
          <h2>₹{{kcon(item.amount)}}</h2>
        </div>
      </div>
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
    inc() {
      return this.$store.getters.inc('expense')
    }
  },
  methods: {
    kcon(num) {
      num = parseInt(num);
      if (num < 1000) return num;
      if (num >= 1000000) return num / 1000000 + "M";
      return num / 1000 + "k";
    },
    remove(id) {
      const y = confirm('Remove item ?')
      if (y) {
        this.$store.dispatch('remove', id)
      }
    },
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
  font-size: 2rem;
  letter-spacing: 5px;
}
.tabs {
  width: 100%;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 13px;
  .tab {
    background: #262626;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    border-left: 10px solid #3A3A3A;
    display: flex;
    align-items: center;
    h2 {
      flex: 1;
      color: #8B8B8B;
      font-size: 1.8rem;
    }
    h2:last-of-type {
      color: yellowgreen;
    }
  }
}
</style>