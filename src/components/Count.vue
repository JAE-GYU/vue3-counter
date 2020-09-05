<template>
  <h3>{{ msg }}</h3>
  <p>Count: {{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="increment">Increment +</button>
  <button @click="decrement">Decrement -</button>
  <button @click="setCount(100)">Set Count 100</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCount from "../composables/count";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const { count, setCount, doubleCount, increment, decrement } = useCount();

    return {
      count,
      setCount,
      doubleCount,
      increment,
      decrement
    };
  }
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
