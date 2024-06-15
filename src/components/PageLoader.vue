<template>
    <div>
        <div class="page-loader position-fixed w-100 h-100 top-0" @click="store.methods.changePage()">
            <div class="part left-part w-50 h-100 position-absolute top-0" :class="animation ? 'left-part-active' : ''">
                <img class="img-fluid h-100 w-100" src="/public/images/left-part.jpg" alt="part one">
            </div>
            <div class="part right-part w-50 h-100 position-absolute top-0 "
                :class="animation ? 'right-part-active' : ''">
                <img class="img-fluid h-100 w-100" src="/public/images/right-part.jpg" alt="part one">
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'PageLoader',
    data() {
        return {
            store,
            animation: false
        }
    },
    methods: {

    },
    mounted() {
        setTimeout(() => {
            this.animation = true;
            setTimeout(() => {
                this.animation = false;
            }, 600);
        }, 200)
    }
}
</script>

<style lang="scss" scoped>
.page-loader {
    z-index: 2000;

    .part {
        z-index: 2500;
    }

    .left-part {
        left: -50%;
        transition: transform 0.3s ease-out;
    }

    .left-part-active {
        transform: translateX(101%);
    }

    .right-part {
        right: -50%;
        transition: transform 0.3s ease-out;
    }

    .right-part-active {
        transform: translateX(-101%);
    }
}
</style>