<template>
  <HomePage/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from './components/HomePage.vue';

@Options({
  components: {
    HomePage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100%;
}
</style>
