import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'

describe('useTargetStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
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
     
})