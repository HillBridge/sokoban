<template>
    <div class="cargo" :style="position">
        <img :src="cargoImg">
    </div>
</template>

<script setup>
import cargoImg from '../assets/cargo.png'
import { useMove } from './usePlayer'
import { usePosition } from '../composables/usePosition'

const cargo = {
    x: 2,
    y: 2
}

const position = usePosition(cargo)


</script>

<style scoped>
.cargo {
    position: absolute;
}
</style>