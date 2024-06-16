<template>
    <div class="scene d-none d-md-block hype-w-10x100 h-100 position-fixed top-0 hype-unselectable"
        :class="sceneInfo === 'left' ? 'left-0' : 'right-0'">
        <img class="img-fluid h-100" src="/images/part_one.png" alt="part one">
    </div>

</template>

<script>
export default {
    name: 'SceneComponent',
    props: ['sceneInfo']
}
</script>

<style lang="scss" scoped>
.scene {
    z-index: 10000;
    width: 15%;
}

.left-0 {
    left: 0;
}

.right-0 {
    right: 0;
    transform: scaleX(-1);
}
</style>