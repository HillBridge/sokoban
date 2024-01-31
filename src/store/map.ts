import { defineStore } from "pinia";
import { reactive } from "vue";

export enum MapTile {
    WALL = 1,
    FLOOR = 2
}
export type Map = MapTile[][]

export interface Position {
    x: number 
    y: number
}

export const useMapStore = defineStore('map', () => {
    let map = reactive<Map>([])

    const setupMap = (newMap: Map) => {
        map.splice(0, map.length, ...newMap);
    }

    const isWall = (position: Position) => {
        return map[position.y ][position.x] === MapTile.WALL
    }

    return {
        map,
        setupMap,
        isWall
    }
})