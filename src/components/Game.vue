<template>
    <div>
        <Map></Map>

        <template v-for="target in targets" :key="target.x">
            <Target :x="target.x" :y="target.y"></Target>
        </template>

        <Player></Player>

        <template v-for="cargo in cargos" :key="cargo.x">
            <Cargo :cargo="cargo"></Cargo>
        </template>

        <div style="background-color: rgb(224, 66, 66);" v-if="game.isGameCompeleted">
            <button>下一关</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'
import Target from './Target.vue'

import { useCargoStore } from '../store/cargo'
import { useTargetStore } from '../store/target'
import { useGameStore } from '../store/game'

const levelGameData = {
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

const { game, setupData } = useGameStore()

setupData(levelGameData)

const { cargos } = useCargoStore()

const { targets } = useTargetStore()


</script>

<style scoped></style>