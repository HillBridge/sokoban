import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', () => {
    const player = {
        x: 1,
        y: 1
    }

    return { 
        player
    }
})