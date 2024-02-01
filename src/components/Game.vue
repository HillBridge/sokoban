<template>
    <div>
        <Map></Map>

        <template v-for="target in targets" :key="target.x">
            <Target :x="target.x" :y="target.y"></Target>
        </template>

        <Player></Player>

        <template v-for="cargo in cargos" :key="cargo.id">
            <Cargo :cargo="cargo"></Cargo>
        </template>

        <div style="background-color: rgb(242, 15, 15);" v-if="game.isGameCompeleted">
            <button @click="toNextLevel">下一关</button>
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
import { gameData } from '../game/gameData'


const { game, setupData, toNextLevel } = useGameStore()

setupData(gameData)

const { cargos } = useCargoStore()

const { targets } = useTargetStore()


</script>

<style scoped></style>