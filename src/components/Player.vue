<template>
    <div class="palyer" :style="position">
        <img :src="playerImg">
    </div>
</template>

<script setup lang="ts">

import playerImg from '../assets/keeper.png'
import { useMove } from './usePlayer'
import { usePlayerStore } from "../store/player";
import { usePosition } from '../composables/usePosition'

useMove()

const { player } = usePlayerStore();

const position = usePosition(player)

</script>

<style scoped>
.palyer {
    position: absolute;
}
</style>