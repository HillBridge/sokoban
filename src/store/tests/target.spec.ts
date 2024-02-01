import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useMapStore } from '../map';

describe('useTargetStore', () => {
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

    it('shift in', () => {
        const { addCargo, createCargo, moveCargo } = useCargoStore()
        const cargo = createCargo({ x: 2, y: 1 })
        addCargo(cargo)

        const { addTarget, createTarget } = useTargetStore()
        const target = createTarget({ x: 3, y: 1 })
        addTarget(target)

        moveCargo(cargo, 1, 0)

        expect(cargo.onTarget).toBe(true)
    })

    it('shift out', () => {
        const { addCargo, createCargo, moveCargo } = useCargoStore()
        const cargo = createCargo({ x: 2, y: 1 })
        addCargo(cargo)

        const { addTarget, createTarget } = useTargetStore()
        const target = createTarget({ x: 3, y: 1 })
        addTarget(target)

        moveCargo(cargo, 1, 0)
        moveCargo(cargo, 1, 0)

        expect(cargo.onTarget).toBe(false)
    })

    it('clean all targets', () => {
        const { addTarget, createTarget, targets, cleanAllTargets } = useTargetStore()
        addTarget(createTarget({ x: 3, y: 1 }))
        addTarget(createTarget({ x: 3, y: 2 }))

        cleanAllTargets()

        expect(targets.length).toBe(0)
    })
     
})