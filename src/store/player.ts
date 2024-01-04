import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
    const player = reactive({
        x: 1,
        y: 1
    })

    const movePlayerToLeft = () => {
        const { isWall } = useMapStore()

        if (isWall({ x: player.x - 1, y: player.y })) return 
        
        player.x -= 1
    }

    const movePlayerToRight = () => {
        const { isWall } = useMapStore()
        
        if (isWall({ x: player.x + 1 , y: player.y })) return 

        player.x += 1
    }

    const movePlayerToTop = () => {
        const { isWall } = useMapStore()
        
        if (isWall({ x: player.x, y: player.y - 1 })) return 
        
        player.y -= 1
    }
    
    const movePlayerToDown = () => {
        const { isWall } = useMapStore()
        
        if (isWall({ x: player.x, y: player.y + 1 })) return 

        player.y += 1
    }

    return { 
        player,
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToTop,
        movePlayerToDown
    }
})