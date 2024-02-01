import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target';
import { useGameStore } from '../game';
import { useMapStore } from '../map';
import { usePlayerStore } from '../player';
import { GameData, LevelGameData } from '../../game/gameData';

const firstLevelGameData = {
    player: {
        x: 2,
        y: 1
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    cargos: [
        {
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }
    ],
    targets: [
        {
            x: 1,
            y: 4
        },
        {
            x: 3,
            y: 5
        }
    ]
}

const secondlevelGameData = {
    player: {
        x: 3,
        y: 1
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    cargos: [
        {
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }
    ],
    targets: [
        {
            x: 1,
            y: 4
        },
        {
            x: 3,
            y: 5
        }
    ]
}

const gameData: GameData = [firstLevelGameData, secondlevelGameData]

describe('useGameStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        const { setupMap } = useMapStore()
        const map = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]
        setupMap(map)
    });

    it('should game compeleted', () => {
        const { addCargo, createCargo, moveCargo } = useCargoStore()
        const cargo = createCargo({ x: 2, y: 1 })
        addCargo(cargo)

        const { addTarget, createTarget } = useTargetStore()
        const target = createTarget({ x: 3, y: 1 })
        addTarget(target)

        moveCargo(cargo, 1, 0)

        const { detectionGameCompeleted, game } = useGameStore()

        detectionGameCompeleted()

        expect(game.isGameCompeleted).toBe(true)
    })

    it('should game not compeleted', () => {
        const { addCargo, createCargo, moveCargo } = useCargoStore()
        const cargo = createCargo({ x: 2, y: 1 })
        addCargo(cargo)

        const { addTarget, createTarget } = useTargetStore()
        const target = createTarget({ x: 3, y: 1 })
        addTarget(target)

        moveCargo(cargo, 1, 0)
        moveCargo(cargo, 1, 0)

        const { detectionGameCompeleted, game } = useGameStore()

        detectionGameCompeleted()

        expect(game.isGameCompeleted).toBe(false)
    })

    it('should setup game', () => {
        
        const { setupData } = useGameStore()

        setupData(gameData)

        expectSetupData(firstLevelGameData)
       
    })

    it('should next level', () => {
        const { setupData, toNextLevel, game } = useGameStore()
        setupData(gameData)

        toNextLevel()

        expect(game.level).toBe(2)
        expectSetupData(secondlevelGameData)
    })

    it('should be reset isGameCompeleted status when to next level', () => {
        const { setupData, toNextLevel, game } = useGameStore()
        setupData(gameData)

        game.isGameCompeleted = true

        toNextLevel()

        expect(game.isGameCompeleted).toBe(false)
        expectSetupData(secondlevelGameData)
    })

    function expectSetupData(levelGameData: LevelGameData) {
        const { map } = useMapStore()
        const { player } = usePlayerStore()
        const { cargos } = useCargoStore()
        const { targets } = useTargetStore()
    
        expect(player.x).toBe(levelGameData.player.x)
        expect(player.y).toBe(levelGameData.player.y)
        expect(map).toEqual(levelGameData.map)
        expect(cargos.length).toEqual(levelGameData.cargos.length)
        expect(targets.length).toEqual(levelGameData.targets.length)
    }
})