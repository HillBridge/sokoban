import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore, type Map } from './map'
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";

interface Game {
    isGameCompeleted: boolean
}

interface LevelGameData {
    player: {
        x: number
        y: number
    }
    map: Map
    cargos: { x: number, y: number }[]
    targets: { x: number, y: number }[]
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

    const setupData = (levelGameData: LevelGameData) => {
        const { setupMap } = useMapStore()
        const { player } = usePlayerStore()
        const { addCargo, createCargo } = useCargoStore()
        const { addTarget, createTarget } = useTargetStore()

        player.x = levelGameData.player.x
        player.y = levelGameData.player.y
        setupMap(levelGameData.map)
        
        levelGameData.cargos.forEach(c => addCargo(createCargo({ x: c.x, y: c.y })))
        levelGameData.targets.forEach(t =>addTarget(createTarget({ x: t.x, y: t.y })))

    }

    return {
        detectionGameCompeleted,
        game,
        setupData
    }
})