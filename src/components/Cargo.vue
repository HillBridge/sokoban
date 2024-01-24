<template>
    <div class="cargo" :style="position">
        <img :src="cargo.onTarget ? cargoOnTargetImg : cargoImg">
    </div>
</template>

<script setup lang="ts">
import cargoImg from '../assets/cargo.png'
import cargoOnTargetImg from '../assets/cargo_on_target.png'
import { usePosition } from '../composables/usePosition'
import { Cargo } from '../store/cargo';

interface Props {
    cargo: Cargo
}

const props = defineProps<Props>()

const position = usePosition(props.cargo)


</script>

<style scoped>
.cargo {
    position: absolute;
}
</style>