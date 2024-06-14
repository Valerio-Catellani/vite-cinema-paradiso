<template>
    <div>
        <div class="col-12 col-lg-6" v-for="room in rooms" :key="room.id">
            <CardComponent :item="room" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'RoomsListComponent',
}
</script>

<style lang="scss" scoped></style>