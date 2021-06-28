<template>
  <div class="container">
    <Logo />
    <section>
        <form>
          <input required placeholder="name" autocomplete="off" v-model="name" type="text" name="name" />
          <input required pattern="[\d]" placeholder="amount" autocomplete="off" v-model="amount" type="text" name="amount" />
          <input required v-model="date" type="date" name="date" />
          <div class="row">
            <h2>INCOME</h2>
            <label class="switch">
              <input hidden v-model="inc" type="checkbox" />
              <span class="slider round"></span>
            </label>
            <h2>EXPENSE</h2>
          </div>
          <div class="row">
            <button @click="nav" class="x">+</button>
            <button @click.prevent="sub" type="submit">+</button>
          </div>
        </form>
    </section>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import moment from 'moment';
import {nanoid} from 'nanoid'
export default {
  name: "Add",
  components: {
    Logo,
  },
  data() {
    return {
      inc: false,
      name: '',
      amount: '',
      date: '',
    };
  },
  computed: {
    datef() {
      const d = this.date.split('-').join('')
      return moment(d, "YYYYMMDD").unix()
    }
  },
  methods: {
    nav() {
      this.$router.push({ name: "Home" });
    },
    sub() {
      const data = {
        id: nanoid(),
        name: this.name,
        amount: parseInt(this.amount),
        date: this.datef,
        category: this.inc ? 'expense' : 'income'
      }
      console.log(data);
      this.$store.dispatch('transact', data)
      this.$router.push({ name: "Home" });
    }
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
  height: 95vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    flex:1;
  }
  button {
    height: 72px;
    width: 72px;
    margin: 0 auto;
    display: grid;
    place-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    font-size: 60px;
    font-weight: 300;
    background: #434343;
    color: #05FF00;
    cursor: pointer;
  }
  .x {
    color: orangered;
    transform: rotateZ(45deg);
  }
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
input {
  width: 80%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  font-size: 2rem;
  outline: none;
  border: none;
  position: relative;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #2196f3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
}
</style>