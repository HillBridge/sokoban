import { it, expect, describe } from 'vitest'
import { reactive } from "vue";
import { usePosition } from '../usePosition'


describe('usePosition', () => {
    it('should return a position', () => {
        const player = {
            x: 1,
            y: 1
        }

        const position = usePosition(player)

        expect(position.value).toEqual({
            left: '32px',
            top: '32px'
        })
    })

    it('should return a reactive position when input value changed', () => {
        const player = reactive({
            x: 1,
            y: 1
        })

        const position = usePosition(player)

        player.x = 2

        expect(position.value).toEqual({
            left: '64px',
            top: '32px'
        })
    })
})