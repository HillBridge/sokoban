import { computed } from "vue";

export const usePosition = (pos: { x: number, y: number }) => {
  const STEP = 32;

  const position = computed(() => {
    return {
      left: pos.x * STEP + "px",
      top: pos.y * STEP + "px",
    };
  });

  return position;
};
