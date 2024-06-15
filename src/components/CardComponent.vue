<template>
    <div>
        <div class="card" >
            <img :src="this.store.imgBasePath + (item.poster_path || item.room_image)" class="card-img-top"
                :alt="item.title || item.name" />
            <div class="card-body">
                <h5 class="card-title">{{ item.title || item.name }}</h5>
                <h6 v-if="item.alias">{{ item.alias }}</h6>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
export default {
    name: "CardComponent",
    props: ["item"],
    data() {
        return {
            store
        };
    }

};
</script>

<style lang="scss" scoped></style>