import { computed, onMounted, onUnmounted } from "vue";
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

  const handleKeyup = (e: KeyboardEvent) => {
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
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeyup);
  })

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyup);
  })
  
};
