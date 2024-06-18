<template>
    <div class="gallery">
        <template v-if="store.api_data.rooms.allRooms.data">
            <img v-for="element in store.api_data.rooms.allRooms.data" :key="element.id"
                :src="store.imgBasePath + element.room_image">
        </template>
    </div>
</template>

<script>
import { store } from '../store';
export default {

    name: 'MyCarusel',
    data() {
        return {
            store
        }
    },

    created() {
        store.methods.getAllElements('rooms');
        console.log(store.api_data.rooms.allRooms.data);
    }

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

@for $i from 1 through $n {
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

    @for $i from 1 through $n {
        .gallery>img:nth-child(#{$i}) {
            animation-delay: calc(#{(1 - $i) / $n} * var(--d));
            --r: #{(-20 + random(40))}deg;
        }
    }

    @keyframes slide {
        #{(50 / $n) * 1%} {
            transform: translateX(120%) rotate(var(--r));
        }

        0%,
        100%,
        #{(100 / $n) * 1%} {
            transform: translateX(0%) rotate(var(--r));
        }
    }

    @keyframes z-order {

        #{(50 / $n) * 1%},
        #{(100 / $n) * 1%} {
            z-index: 1;
        }

        #{(100 - 100 / $n) * 1%} {
            z-index: 2;
        }
    }

    @keyframes z-order-last {

        #{(50 / $n) * 1%},
        #{(100 / $n) * 1%} {
            z-index: 1;
        }

        #{(100 - 50 / $n) * 1%} {
            z-index: 2;
        }
    }

    .gallery>img:nth-child(#{$i}) {
        animation-delay: calc(#{(1 - $i) / $n} * var(--d));
        --r: #{(-20 + random(40))}deg;
    }
}

@keyframes slide {
    #{(50 / $n) * 1%} {
        transform: translateX(120%) rotate(var(--r));
    }

    0%,
    100%,
    #{(100 / $n) * 1%} {
        transform: translateX(0%) rotate(var(--r));
    }
}

@keyframes z-order {

    #{(50 / $n) * 1%},
    #{(100 / $n) * 1%} {
        z-index: 1;
    }

    #{(100 - 100 / $n) * 1%} {
        z-index: 2;
    }
}

@keyframes z-order-last {

    #{(50 / $n) * 1%},
    #{(100 / $n) * 1%} {
        z-index: 1;
    }

    #{(100 - 50 / $n) * 1%} {
        z-index: 2;
    }
}
</style>