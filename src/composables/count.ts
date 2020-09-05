import { reactive, Ref, toRefs, computed } from "vue";

interface Count {
  count: number;
}

export default function useCount() {
  const state = reactive<Count>({
    count: 0
  });

  const doubleCount: Ref<number> = computed(() => state.count * 2);

  const setCount = (x: number) => (state.count = x);
  const increment = () => state.count++;
  const decrement = () => state.count--;

  const { count } = toRefs(state);

  return {
    count,
    doubleCount,
    increment,
    decrement,
    setCount
  };
}
