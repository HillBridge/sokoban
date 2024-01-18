import { defineStore } from "pinia";

export const useCargoStore = defineStore('cargo', () => {
    const cargos = [
        {
            x: 2,
            y: 2
        },
        {
            x: 3,
            y: 3
        }
    ]
    return {
        cargos
    }
})