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
     
})