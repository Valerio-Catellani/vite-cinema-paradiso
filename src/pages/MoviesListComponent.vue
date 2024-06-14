<template>
    <div>
        MoviesListComponent
    </div>
</template>

<script>
import { store } from '../store';
export default {

    name: 'MoviesListComponent',
    data() {
        return {
            store
        }
    },
    created() {
        store.methods.getAllElements('movies');
    }
}

</script>

<style lang="scss" scoped></style>