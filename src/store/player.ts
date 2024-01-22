import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from './map'
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore('player', () => {
    const player = reactive({
        x: 2,
        y: 1
    })

    const { isWall } = useMapStore()
    const { findCargo } = useCargoStore()
    
    const _move = (dx: number, dy: number) => {
        const nextPosition = {
            x: player.x + dx,
            y: player.y + dy
        }
        if (isWall(nextPosition)) return 

        const cargo = findCargo(nextPosition)
        
        if (cargo) {
            cargo.x += dx
            cargo.y += dy
        }
        
        player.x += dx
        player.y += dy
    }

    const movePlayerToLeft = () => {
        _move(-1, 0)
    }

    const movePlayerToRight = () => {
        _move(1, 0)
    }

    const movePlayerToTop = () => {
        _move(0, -1)
    }
    
    const movePlayerToDown = () => {
        _move(0, 1)
    }

    return { 
        player,
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToTop,
        movePlayerToDown
    }
})