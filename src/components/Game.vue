<template>
    <div>
        <Map></Map>

        <Player></Player>

        <template v-for="cargo in cargos" :key="cargo.x">
            <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
        </template>


    </div>
</template>

<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'

import { useCargoStore } from '../store/cargo'

const { addCargo, createCargo, cargos } = useCargoStore()

addCargo(createCargo({ x: 3, y: 2 }))

addCargo(createCargo({ x: 2, y: 2 }))

</script>

<style scoped></style>