<template>
    <div>
        <Map></Map>

        <template v-for="target in targets" :key="target.x">
            <Target :x="target.x" :y="target.y"></Target>
        </template>

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
import Target from './Target.vue'

import { useCargoStore } from '../store/cargo'
import { useTargetStore } from '../store/target'

const { addCargo, createCargo, cargos } = useCargoStore()
addCargo(createCargo({ x: 3, y: 2 }))
addCargo(createCargo({ x: 2, y: 2 }))

const { createTarget, addTarget, targets } = useTargetStore()

addTarget(createTarget({ x: 3, y: 4 }))
addTarget(createTarget({ x: 4, y: 4 }))

</script>

<style scoped></style>