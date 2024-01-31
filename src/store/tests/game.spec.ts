import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target';
import { useGameStore } from '../game';
import { useMapStore } from '../map';

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
})