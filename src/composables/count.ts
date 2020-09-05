import { reactive, ComputedRef, toRefs, computed } from "vue";

interface Count {
  count: number;
  doubleCount: ComputedRef<number>;
}

export default function useCount() {
  const state = reactive<Count>({
    count: 0,
    doubleCount: computed((): number => state.count * 2)
  });

  const setCount = (x: number) => (state.count = x);
  const increment = () => state.count++;
  const decrement = () => state.count--;

  const { count, doubleCount } = toRefs(state);

  return {
    count,
    doubleCount,
    increment,
    decrement,
    setCount
  };
}
