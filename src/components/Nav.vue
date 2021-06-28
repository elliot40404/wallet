<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/income">INCOME</router-link></li>
        <li @click="nav" class="add">+</li>
        <li><router-link to="/expense">EXPENSE</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    nav() {
      this.$router.push({ name: "Add" });
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 10vh;
  background: cyan;
  position: relative;
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
  background: #282828;
  position: relative;
  li {
    flex: 1;
    a {
      text-decoration: none;
      font-size: 2rem;
      color: #787878;
      font-weight: 500;
      &.router-link-active {
        color: white;
      }
    }
  }
  li.add {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #434343;
    z-index: 10;
    height:72px;
    width:72px;
    border-radius: 50%;
    font-size: 7.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    box-shadow: 5px 5px 9px #00000081;
    color: #52FF00;
    cursor: pointer;
  }
}
</style>