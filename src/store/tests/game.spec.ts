import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target';
import { useGameStore } from '../game';
import { useMapStore } from '../map';
import { usePlayerStore } from '../player';

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
        const levelGameData = {
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

        const { setupData } = useGameStore()
        const { map } = useMapStore()
        const { player } = usePlayerStore()
        const { cargos } = useCargoStore()
        const { targets } = useTargetStore()

        const gameData = [levelGameData]
        
        setupData(gameData)

        expect(player.x).toBe(levelGameData.player.x)
        expect(player.y).toBe(levelGameData.player.y)
        expect(map).toEqual(levelGameData.map)
        expect(cargos.length).toEqual(levelGameData.cargos.length)
        expect(targets.length).toEqual(levelGameData.targets.length)
    })

    it('should next level', () => {
        const levelGameData = {
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

        const { setupData, toNextLevel, game } = useGameStore()
        const { map } = useMapStore()
        const { player } = usePlayerStore()
        const { cargos } = useCargoStore()
        const { targets } = useTargetStore()

        const gameData = [levelGameData, secondlevelGameData]
        
        setupData(gameData)

        toNextLevel()

        expect(game.level).toBe(2)
        expect(player.x).toBe(secondlevelGameData.player.x)
        expect(player.y).toBe(secondlevelGameData.player.y)
        expect(map).toEqual(secondlevelGameData.map)
        expect(cargos.length).toEqual(secondlevelGameData.cargos.length)
        expect(targets.length).toEqual(secondlevelGameData.targets.length)
    })
})