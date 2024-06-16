<template>
    <div class="py-4 d-flex align-items-center justify-content-center">
        <nav aria-label="pagination">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': store.paramsObject.page <= 1 }">
                    <a class="page-link" href="#" @click.prevent="setParams(store.paramsObject.page - 1)">Pevious</a>
                </li>
                <li class="page-item" v-for="page in store.api_data.AllMovies.infoPagination.last_page" :key="page">
                    <a class="page-link" :class="{ 'active': store.paramsObject.page === page }" href="#"
                        @click.prevent=" store.paramsObject.page = page, setParams(store.paramsObject.page)">{{ page
                        }}</a>
                </li>
                <li class="page-item"
                    :class="{ 'disabled': store.paramsObject.page >= store.api_data.AllMovies.infoPagination.last_page }">
                    <a class="page-link" href="#" @click.prevent="setParams(store.paramsObject.page + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'PaginationComponent',
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        setParams(numpage) {
            store.paramsObject.page = numpage;
            this.store.methods.getProjects(store.paramsObject);
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.pagination {
    --bs-pagination-color: $active-secondary-color !important;
    --bs-pagination-hover-color: $active-secondary-color !important;
    --bs-pagination-focus-color: $active-secondary-color !important;
    --bs-pagination-active-bg: $active-secondary-color !important;
    --bs-pagination-active-border-color: $active-secondary-color !important;

    .page-item.active {
        color: black !important;

        .page-link {
            background-color: $active-primary-color !important;

            &:focus {
                box-shadow: 0 0 0 0.25rem $active-tertiary-color !important;
            }
        }
    }

    .page-link {
        background-color: $background-4th-color !important;
        border: var(--bs-pagination-border-width) solid $background-tertiary-color;

        &:focus {
            box-shadow: 0 0 0 0.25rem $active-primary-color !important;
        }
    }

    .active {
        background-color: $active-secondary-color !important;
    }
}
</style>