<template>
  <div id="app">
    <Count msg="Vue 3 Composition API + Typescript" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Count from "./components/Count.vue";

export default defineComponent({
  name: "App",
  components: {
    Count
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
