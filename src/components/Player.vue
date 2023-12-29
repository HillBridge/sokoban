<template>
    <div class="palyer" :style="position">
        <img :src="playerImg">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import playerImg from '../assets/keeper.png'
import { usePlayerStore } from '../store/player'

const { player, movePlayerToLeft, movePlayerToRight, movePlayerToTop, movePlayerToDown } = usePlayerStore()

const STEP = 32

const position = computed(() => {
    return {
        left: player.x * STEP + 'px',
        top: player.y * STEP + 'px',
    }
})

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
            movePlayerToLeft()
            break;

        case 'ArrowRight':
            movePlayerToRight()
            break;

        case 'ArrowUp':
            movePlayerToTop()
            break;

        case 'ArrowDown':
            movePlayerToDown()
            break;

        default:
            break;
    }
})


</script>

<style scoped>
.palyer {
    position: absolute;
}
</style>