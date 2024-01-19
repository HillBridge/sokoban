import { defineStore } from "pinia";
import { Position } from './map'

interface Cargo {
    x: number;
    y: number
}

export const useCargoStore = defineStore('cargo', () => {
    const cargos: Cargo[] = []

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

    return {
        cargos,
        createCargo,
        addCargo,
        findCargo
    }
})