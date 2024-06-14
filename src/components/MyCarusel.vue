<template>
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
        <img src="https://picsum.photos/id/65/400/400" alt="a girl">
    </div>
</template>

<script>
export default {

    name: 'MyCarusel',

}
</script>

<style lang="scss" scoped>
$n: 4;
/* number of images*/

.gallery {
    --d: 20s;
    /* duration */

    display: grid;
    width: 520px;
}

.gallery>img {
    grid-area: 1/1;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 10px solid #f2f2f2;
    box-shadow: 0 0 4px #0007;
    z-index: 2;
    animation:
        slide var(--d) infinite,
        z-order var(--d) infinite steps(1);
}

.gallery img:last-child {
    animation-name: slide, z-order-last;
}

@for $i from 1 to ($n + 1) {
    .gallery>img:nth-child(#{$i}) {
        animation-delay: calc(#{(1 - $i)/$n} * var(--d));
        --r: #{(-20 + random(40))}deg;
    }
}

@keyframes slide {
    #{50 / $n}% {
        transform: translateX(120%) rotate(var(--r));
    }

    0%,
    100%,
    #{100 / $n}% {
        transform: translateX(0%) rotate(var(--r));
    }
}

/* missing closing curly brace here */

@keyframes z-order {

    #{50 / $n}%,
    #{100 / $n}% {
        z-index: 1;
    }

    #{100 - 100 / $n}% {
        z-index: 2;
    }
}

/* missing closing curly brace here */

@keyframes z-order-last {

    #{50 / $n}%,
    #{100 / $n}% {
        z-index: 1;
    }

    #{100 - 50 / $n}% {
        z-index: 2;
    }
}
</style>