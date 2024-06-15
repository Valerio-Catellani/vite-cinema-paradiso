<template>
    <div>
        <h1 class="text-center corsive-text display-1">Cinema <span class="d-block">Paradiso</span></h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h1 {
    margin: auto;
    font-weight: 300;
    animation: lights 5s 750ms linear infinite;
    margin-bottom: 80px;
}

@keyframes lights {
    0% {
        color: $background-secondary-color;
        text-shadow:
            0 0 1em rgba(22, 161, 149, 0.2),
            0 0 0.125em rgba(22, 161, 149, 0.3),
            -1em -0.125em 0.5em rgba(193, 214, 216, 0),
            1em 0.125em 0.5em rgba(140, 228, 206, 0);
    }

    30% {
        color: $background-tertiary-color;
        text-shadow:
            0 0 1em rgba(22, 161, 149, 0.5),
            0 0 0.125em rgba(22, 161, 149, 0.5),
            -0.5em -0.125em 0.25em rgba(193, 214, 216, 0.2),
            0.5em 0.125em 0.25em rgba(140, 228, 206, 0.4);
    }

    40% {
        color: $background-4th-color;
        text-shadow:
            0 0 1em rgba(22, 161, 149, 0.5),
            0 0 0.125em rgba(140, 228, 206, 0.5),
            -0.25em -0.125em 0.125em rgba(193, 214, 216, 0.2),
            0.25em 0.125em 0.125em rgba(140, 228, 206, 0.4);
    }

    70% {
        color: $background-tertiary-color;
        text-shadow:
            0 0 1em rgba(22, 161, 149, 0.5),
            0 0 0.125em rgba(22, 161, 149, 0.5),
            0.5em -0.125em 0.25em rgba(193, 214, 216, 0.2),
            -0.5em 0.125em 0.25em rgba(140, 228, 206, 0.4);
    }

    100% {
        color: $background-secondary-color;
        text-shadow:
            0 0 1em rgba(22, 161, 149, 0.2),
            0 0 0.125em rgba(22, 161, 149, 0.3),
            1em -0.125em 0.5em rgba(193, 214, 216, 0),
            -1em 0.125em 0.5em rgba(140, 228, 206, 0);
    }
}
</style>