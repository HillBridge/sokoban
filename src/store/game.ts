import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore } from './map'
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";
import { GameData } from "../game/gameData";

interface Game {
    isGameCompeleted: boolean
    level: number
}

let _gameData: GameData;

export const useGameStore = defineStore('game', () => {
    const game = reactive<Game>({
        isGameCompeleted: false,
        level: 1
    })
    const detectionGameCompeleted = () => {
        const { cargos } = useCargoStore()
        // every 遍历过程中一个为false就终止循环, 返回结果为false
        game.isGameCompeleted = cargos.every(c => c.onTarget)
    }

    const setupData = (gameData: GameData) => {
        _gameData = gameData
        setupLevel()
    }

    const setupGameCompeletedStatus = () => {
        game.isGameCompeleted = false
    }

    const toNextLevel = () => {
        game.level += 1
        setupGameCompeletedStatus()
        setupLevel()
    }

    function setupLevel() {
        const { setupMap } = useMapStore()
        const { player } = usePlayerStore()
        const { addCargo, createCargo, cleanAllCargos } = useCargoStore()
        const { addTarget, createTarget, cleanAllTargets } = useTargetStore()
        const levelGameData = _gameData[game.level-1]

        player.x = levelGameData.player.x
        player.y = levelGameData.player.y
        setupMap(levelGameData.map)

        cleanAllCargos()
        levelGameData.cargos.forEach(c => addCargo(createCargo({ x: c.x, y: c.y })))

        cleanAllTargets()
        levelGameData.targets.forEach(t =>addTarget(createTarget({ x: t.x, y: t.y })))
    }

    return {
        detectionGameCompeleted,
        game,
        setupData,
        toNextLevel
    }
})