import { computed } from "vue";
import { usePlayerStore } from "../store/player";

export const usePosition = () => {
  const { player } = usePlayerStore();

  const STEP = 32;

  const position = computed(() => {
    return {
      left: player.x * STEP + "px",
      top: player.y * STEP + "px",
    };
  });

  return position;
};

export const useMove = () => {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToDown,
  } = usePlayerStore();

  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;

      case "ArrowRight":
        movePlayerToRight();
        break;

      case "ArrowUp":
        movePlayerToTop();
        break;

      case "ArrowDown":
        movePlayerToDown();
        break;

      default:
        break;
    }
  });
};
