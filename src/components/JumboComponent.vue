<template>
    <div class="jumbo-container position-relative">
        <img class="jumbo-img w-100" :src=img_name alt="jumbo image">
        <div class="bg-fade position-absolute"></div>
    </div>
</template>

<script>
export default {
    name: 'JumboComponent',
    props: {
        img_name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.jumbo-container {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    height: 500px;
    overflow: hidden;

    img {
        transform: translateY(-50%);
    }

    .bg-fade {
        width: 100%;
        height: 50px;
        top: 250px;
        background: linear-gradient(360deg, $background-primary-color 0%, rgba(148, 187, 233, 0) 50%);
    }
}
</style>