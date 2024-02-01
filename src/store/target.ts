import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from './map'
import { Cargo } from "./cargo";

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

    const findTarget = (cargo: Cargo) => {
        return targets.find(t => t.x === cargo.x && t.y === cargo.y)
    }

    const cleanAllTargets = () => {
        targets.splice(0, targets.length)
    }

    return {
        findTarget,
        createTarget,
        addTarget,
        targets,
        cleanAllTargets
    }
})