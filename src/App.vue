<template>
  <div>
    <router-view v-slot="{ Component }">
      <!-- <keep-alive> -->
        <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const data = window.localStorage.getItem('data')
    if (data === null) {
      return
    } else {
      this.$store.dispatch('setData', JSON.parse(data))
    }
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  background: #000;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
