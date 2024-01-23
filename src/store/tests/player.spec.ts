import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from "pinia";
import { usePlayerStore } from '../player'
import { useMapStore } from '../map'
import { useCargoStore } from '../cargo';


describe('player', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe('normal move', () => {
        beforeEach(() => {
            const { setupMap } = useMapStore()

            const newMap = [
                [2, 2, 2],
                [2, 2, 2],
                [2, 2, 2]
            ]
    
            setupMap(newMap)
        })
        it('should move to left', () => {
            const { player, movePlayerToLeft } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToLeft()
    
            expect(player.x).toBe(0)
        })
    
        it('should move to right', () => {
            const { player, movePlayerToRight } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToRight()
    
            expect(player.x).toBe(2)
        })
    
        it('should move to top', () => {
            const { player, movePlayerToTop } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToTop()
    
            expect(player.y).toBe(0)
        })
    
        it('should move to down', () => {
            const { player, movePlayerToDown } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToDown()
    
            expect(player.y).toBe(2)
        })
    })

    describe('collision wall', () => {

        beforeEach(() => {
            const { setupMap } = useMapStore()

            const newMap = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 1, 1, 1, 1]
            ]
    
            setupMap(newMap)
        })
        it('should not move to left when collision a wall', () => {
            const { player, movePlayerToLeft } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToLeft()
    
            expect(player.x).toBe(1)
        })

        it('should not move to right when collision a wall', () => {
            const { player, movePlayerToRight } = usePlayerStore()
            player.x = 5
            player.y = 1
    
            movePlayerToRight()
    
            expect(player.x).toBe(5)
        })

        it('should not move to top when collision a wall', () => {
            const { player, movePlayerToTop } = usePlayerStore()
            player.x = 1
            player.y = 1
    
            movePlayerToTop()
    
            expect(player.y).toBe(1)
        })

        it('should not move to down when collision a wall', () => {
            const { player, movePlayerToDown } = usePlayerStore()
            player.x = 1
            player.y = 5
    
            movePlayerToDown()
    
            expect(player.y).toBe(5)
        })
    })

    describe('collision cargo', () => {
        beforeEach(() => {
            const { setupMap } = useMapStore()

            const newMap = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ]
    
            setupMap(newMap)
        })

        it('should move to left', () => {
            const { player, movePlayerToLeft } = usePlayerStore()
            const { addCargo, createCargo } = useCargoStore()

            const cargo = createCargo({ x: 2, y: 1 })
            addCargo(cargo)

            player.x = 3
            player.y = 1
    
            movePlayerToLeft()
    
            expect(player.x).toBe(2)
            expect(cargo.x).toBe(1)
        })

        it('should move to right', () => {
            const { player, movePlayerToRight } = usePlayerStore()
            const { addCargo, createCargo } = useCargoStore()

            const cargo = createCargo({ x: 3, y: 1 })
            addCargo(cargo)

            player.x = 2
            player.y = 1
    
            movePlayerToRight()
    
            expect(player.x).toBe(3)
            expect(cargo.x).toBe(4)
        })

        it('should move to top', () => {
            const { player, movePlayerToTop } = usePlayerStore()
            const { addCargo, createCargo } = useCargoStore()

            const cargo = createCargo({ x: 1, y: 2 })
            addCargo(cargo)

            player.x = 1
            player.y = 3
    
            movePlayerToTop()
    
            expect(player.y).toBe(2)
            expect(cargo.y).toBe(1)
        })

        it('should move to down', () => {
            const { player, movePlayerToDown } = usePlayerStore()
            const { addCargo, createCargo } = useCargoStore()

            const cargo = createCargo({ x: 1, y: 3 })
            addCargo(cargo)

            player.x = 1
            player.y = 2
    
            movePlayerToDown()
    
            expect(player.y).toBe(3)
            expect(cargo.y).toBe(4)
        })
    
        it('fix bug', () => {
            const { player, movePlayerToRight } = usePlayerStore()

            player.x = 3
            player.y = 1

            movePlayerToRight()

            expect(player.x).toBe(4)
        })
    })
    
    describe('collision cargo by cargo', () => {
        beforeEach(() => {
            const { setupMap } = useMapStore()

            const newMap = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ]
    
            setupMap(newMap)
        })
        it('should move to left', () => {
            const { player, movePlayerToLeft } = usePlayerStore()
            const { addCargo, createCargo } = useCargoStore()

            const cargo1 = createCargo({ x: 2, y: 1 })
            addCargo(cargo1)
            const cargo2 = createCargo({ x: 3, y: 1 })
            addCargo(cargo2)

            player.x = 4
            player.y = 1
    
            movePlayerToLeft()
    
            expect(player.x).toBe(4)
            expect(cargo1.x).toBe(2)
            expect(cargo2.x).toBe(3)
        })
    })
})