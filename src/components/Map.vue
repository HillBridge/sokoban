<template>
    <div v-for="(col, colIdx) in map" class="map-flex" :key="colIdx">
        <div v-for="(row, rowIdx) in col" :key="row">
            <template v-if="col[rowIdx] === MapTile.WALL">
                <img :src="wallImg">
            </template>
            <template v-if="col[rowIdx] === MapTile.FLOOR">
                <img :src="floorImg">
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import wallImg from '../assets/wall.png'
import floorImg from '../assets/floor.png'

import { useMapStore, MapTile } from '../store/map'
const { map } = useMapStore()

</script>

<style scoped>
.map-flex {
    height: 32px;
    display: flex;
}
</style>