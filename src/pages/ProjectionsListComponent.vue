<template>
    <div>
        ProjectionsListComponent
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'ProjectionsListComponent',
    data() {
        return {
            store
        }
    },

    created() {
        store.methods.getAllElements('projections');
    }
}
</script>

<style lang="scss" scoped></style>