import { defineStore } from "pinia";

export enum MapTile {
    WALL = 1,
    FLOOR = 2
}
type Map = MapTile[][]

export interface Position {
    x: number 
    y: number
}

export const useMapStore = defineStore('map', () => {
    let map = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ]

    const setupMap = (newMap: Map) => {
        map.splice(0, map.length, ...newMap);
    }

    const isWall = (position: Position) => {
        return map[position.x ][position.y] === MapTile.WALL
    }

    return {
        map,
        setupMap,
        isWall
    }
})