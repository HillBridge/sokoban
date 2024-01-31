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
import { usePlayerStore } from '../store/player'
import { useMapStore } from '../store/map'

const { player } = usePlayerStore();
player.x = 3
player.y = 1

const { setupMap } = useMapStore()
const map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1]
]
setupMap(map)

const { addCargo, createCargo, cargos } = useCargoStore()
addCargo(createCargo({ x: 3, y: 2 }))
addCargo(createCargo({ x: 2, y: 2 }))

const { createTarget, addTarget, targets } = useTargetStore()

addTarget(createTarget({ x: 1, y: 4 }))
addTarget(createTarget({ x: 3, y: 5 }))

const { game } = useGameStore()

</script>

<style scoped></style>