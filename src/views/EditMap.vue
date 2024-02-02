<template>
    <div class="edit-map-wrap">
        <div class="top">
            <div>地图展示区</div>
            <div>数据展示区</div>
        </div>
        <div>
            工具选择区
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.edit-map-wrap {
    .top {
        display: flex;

        div {
            &:nth-child(1) {
                width: 60%;
                background-color: pink;
            }
        }

    }
}
</style>