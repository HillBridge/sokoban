<template>
    <div class="palyer" :style="position">
        <img :src="playerImg">
    </div>
</template>

<script setup lang="ts">
import playerImg from '../assets/keeper.png'
import { usePlayerStore } from '../store/player'

const { player } = usePlayerStore()

const STEP = 32

const position = {
    top: player.x * STEP + 'px',
    left: player.y * STEP + 'px',
}


</script>

<style scoped>
.palyer {
    position: absolute;
}
</style>