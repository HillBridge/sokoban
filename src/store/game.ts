import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";

interface Game {
    isGameCompeleted: boolean
}

export const useGameStore = defineStore('game', () => {
    const game = reactive<Game>({
        isGameCompeleted: false,
    })
    const detectionGameCompeleted = () => {
        const { cargos } = useCargoStore()
        // every 遍历过程中一个为false就终止循环, 返回结果为false
        game.isGameCompeleted = cargos.every(c => c.onTarget)
    }

    return {
        detectionGameCompeleted,
        game
    }
})