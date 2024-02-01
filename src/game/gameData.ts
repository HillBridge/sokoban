import { type Map } from '../store/map'

export interface LevelGameData {
    player: {
        x: number
        y: number
    }
    map: Map
    cargos: { x: number, y: number }[]
    targets: { x: number, y: number }[]
}

export type GameData = LevelGameData[]

export const firstLevelGameData: LevelGameData = {
    player: {
        x: 2,
        y: 1
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    cargos: [
        {
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }
    ],
    targets: [
        {
            x: 2,
            y: 4
        },
        {
            x: 3,
            y: 5
        }
    ]
}

export const secondLevelGameData: LevelGameData = {
    player: {
        x: 2,
        y: 1
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    cargos: [
        {
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }
    ],
    targets: [
        {
            x: 2,
            y: 4
        },
        {
            x: 3,
            y: 5
        }
    ]
}

export const thirdLevelGameData: LevelGameData = {
    player: {
        x: 2,
        y: 1
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    cargos: [
        {
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }
    ],
    targets: [
        {
            x: 3,
            y: 4
        },
        {
            x: 3,
            y: 5
        }
    ]
}


export const gameData: GameData = [firstLevelGameData, secondLevelGameData, thirdLevelGameData]