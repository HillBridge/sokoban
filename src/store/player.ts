import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePlayerStore = defineStore('player', () => {
    const player = reactive({
        x: 1,
        y: 1
    })

    const movePlayerToLeft = () => {
        player.x -= 1
    }

    const movePlayerToRight = () => {
        player.x += 1
    }

    const movePlayerToTop = () => {
        player.y -= 1
    }
    
    const movePlayerToDown = () => {
        player.y += 1
    }

    return { 
        player,
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToTop,
        movePlayerToDown
    }
})