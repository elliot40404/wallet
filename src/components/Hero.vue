<template>
  <div>
    <header @click="nav">
      <div class="inner">
        <h2>TOTAL</h2>
        <h1>₹{{ kcon(total) }}</h1>
        <div class="row">
          <h4>INCOME</h4>
          <h4>EXPENSE</h4>
        </div>
        <div class="row">
          <h3>₹{{ kcon(inc) }}</h3>
          <h3>₹{{ kcon(exp) }}</h3>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Hero",
  computed: {
    total() {
      return this.$store.getters.total;
    },
    inc() {
      return this.$store.getters.income;
    },
    exp() {
      return this.$store.getters.expense;
    },
  },
  methods: {
    nav() {
      this.$router.push({ name: "Home" });
    },
    kcon(num) {
      num = parseInt(num);
      if (num < 1000) return num;
      if (num >= 1000000) return num / 1000000 + "M";
      return num / 1000 + "k";
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(
    117.13deg,
    #ff0000 0%,
    #ffc700 51.57%,
    #4200ff 100%
  );
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inner {
  background: #000;
  height: 98%;
  width: 99%;
  border-radius: 20px;
  padding: 20px;
}
h2 {
  font-weight: 600;
  color: #5b5b5b;
  font-size: 2.4rem;
  letter-spacing: 5px;
}
h1 {
  font-size: 3.6rem;
  color: #a1c1ff;
  padding: 1rem;
}
.row {
  display: flex;
  align-items: center;
  h3,
  h4 {
    flex: 1;
    padding: 1rem;
  }
  h4 {
    color: #5b5b5b;
    padding: 1rem 1rem 0;
  }
  h3 {
    font-size: 2.4rem;
    color: #e6ffa0;
    padding-top: 0.5rem;
  }
  h3:nth-of-type(2) {
    color: orangered;
  }
}
</style>