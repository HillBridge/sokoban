<template>
    <div class="palyer" :style="position">
        <img :src="playerImg">
    </div>
</template>

<script setup lang="ts">

import playerImg from '../assets/keeper.png'
import { useMove, usePosition } from './usePlayer'

useMove()

const position = usePosition()



</script>

<style scoped>
.palyer {
    position: absolute;
}
</style>