import { defineStore } from "pinia";
import { Position } from './map'
import { reactive } from "vue";
import { useMapStore } from './map'
import { useTargetStore } from "./target";

export interface Cargo {
    x: number;
    y: number;
    onTarget: boolean;
}

export const useCargoStore = defineStore('cargo', () => {
    const cargos: Cargo[] = reactive([])

    const createCargo = ({x, y} : {x: number, y: number}): Cargo => {
        return {
            x,
            y,
            onTarget :false
        }
    }

    const addCargo = (cargo: Cargo) => {
        cargos.push(cargo)
    }

    const findCargo = (position: Position) => {
        return cargos.find(c => c.x === position.x  && c.y === position.y)
    }

    const moveCargo = (cargo: Cargo, dx: number, dy: number) => {
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

        detectionTarget(cargo)

        return true
    }

    const detectionTarget = (cargo: Cargo) => {
        const { findTarget } = useTargetStore()
        cargo.onTarget = !!findTarget(cargo)
    }

    return {
        cargos,
        createCargo,
        addCargo,
        findCargo,
        moveCargo
    }
})

