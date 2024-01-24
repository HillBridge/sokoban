import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from './map'

interface Target {
    x: number;
    y: number;
}

export const useTargetStore = defineStore("target", () => {
    const targets: Target[] = reactive([])

    const createTarget = (postion: Position) => {
        return {
            x: postion.x,
            y: postion.y
        }
    }

    const addTarget = (target: Position) => {
        targets.push(target)
    }

    return {
        createTarget,
        addTarget,
        targets
    }
})