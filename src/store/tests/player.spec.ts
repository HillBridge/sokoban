import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from "pinia";
import { usePlayerStore } from '../player'


describe('player', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    
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