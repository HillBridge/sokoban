import { onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../store/player";
import { useGameStore } from "../store/game";

export const useMove = () => {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToDown,
  } = usePlayerStore();

  const { detectionGameCompeleted } = useGameStore()

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
    detectionGameCompeleted()
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeyup);
  })

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyup);
  })
  
};
