<template>
  <div class="container">
    <Logo />
    <section>
      <Hero />
      <div class="bars">
        <h3>Last 7 days</h3>
        <div class="chart">
          <div
            v-for="(item, index) in bars"
            :style="{ height: item + '%', background: color() }"
            :key="index"
            class="bar"
          ></div>
        </div>
      </div>
      <div class="pie">
        <!-- TODO: pie chart custom -->
      </div>
    </section>
    <Nav />
  </div>
</template>

<script>
import * as _ from 'lodash';
import Logo from "@/components/Logo.vue";
import Nav from "@/components/Nav.vue";
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    Logo,
    Nav,
    Hero,
  },
  data() {
    return {
      bar: [2, 5, 6, 8, 6, 4, 9],
    };
  },
  computed: {
    bars() {
      return this.bar.map(e => e * 5);
    }
  },
  methods: {
    color() {
      function rnd(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const arr = ["A", "B", "C", "D", "E", "F"];
      let color = [
        "FF",
        arr[rnd(1, arr.length)],
        arr[rnd(1, arr.length)],
        rnd(0, 9),
        rnd(0, 9),
      ];
      color = _.shuffle(color);
      return '#'+color.join("");
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
.bars {
  margin: 2rem 0;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  padding: 1rem;
  h3 {
    color: #5b5b5b;
  }
  .chart {
    height: 90%;
    background: #000;
    border-bottom: 3px solid rgb(255, 255, 255);
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    .bar {
      min-height: 10px;
      width: 20px;
    }
  }
}
</style>