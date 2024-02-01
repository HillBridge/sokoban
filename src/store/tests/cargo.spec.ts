import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'

describe('useCargoStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('createCargo', () => {
        const { addCargo, createCargo, cargos } = useCargoStore()
        
        const cargo = createCargo({ x: 2, y: 1 })
        
        addCargo(cargo)

        expect(cargos.length).toBe(1)
    })
     
    it('cleanAllCargos', () => {
        const { addCargo, createCargo, cargos, cleanAllCargos } = useCargoStore()
        
        addCargo(createCargo({ x: 2, y: 1 }))
        addCargo(createCargo({ x: 3, y: 1 }))
        
        cleanAllCargos()

        expect(cargos.length).toBe(0)
    })
})