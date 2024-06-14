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
        this.store.methods.getAllElements('movies');
        this.store.methods.getAllElements('projections');
    }
}

</script>

<style lang="scss" scoped></style>