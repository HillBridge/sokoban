import { defineStore } from "pinia";
import { Position } from './map'
import { reactive } from "vue";
import { useMapStore } from './map'

interface Cargo {
    x: number;
    y: number
}

export const useCargoStore = defineStore('cargo', () => {
    const cargos: Cargo[] = reactive([])

    const createCargo = (position: Position ) => {
        return {
            x: position.x,
            y: position.y
        }
    }

    const addCargo = (cargo: Position) => {
        cargos.push(cargo)
    }

    const findCargo = (position: Position) => {
        return cargos.find(c => c.x === position.x  && c.y === position.y)
    }

    const moveCargo = (cargo: Position, dx: number, dy: number) => {
        const { isWall } = useMapStore()
        const nextCargoPosition = {
            x: cargo.x + dx,
            y: cargo.y + dy
        }
        if (isWall(nextCargoPosition)) return false;

        const nextCargo = findCargo(nextCargoPosition)

        if (nextCargo) return false;

        cargo.x += dx
        cargo.y += dy

        return true
    }

    return {
        cargos,
        createCargo,
        addCargo,
        findCargo,
        moveCargo
    }
})

