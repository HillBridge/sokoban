import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from "pinia";
import { useMapStore} from '../map'


describe('player', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    
    it('should setup map', () => {
        const { map, setupMap } = useMapStore()

        const newMap = [
            [2, 2, 2],
            [2, 2, 2],
            [2, 2, 2]
        ]

        setupMap(newMap)

        expect(map).toEqual(newMap)
    })

    
})