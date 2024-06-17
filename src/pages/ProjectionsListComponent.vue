<template>
    <div class="container">
        <h1 class="text-center fs-1 fw-bold text-danger hype-text-shadow my-5">Proiezioni</h1>
        <table class="table">
            <thead>
                <tr>
                    <th class="text-center" scope="col">Titolo</th>
                    <th class="text-center" scope="col">Data</th>
                    <th class="text-center" scope="col">Orario</th>
                    <th class="text-center" scope="col">Sala</th>
                    <th class="text-center" scope="col">Prezzo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projection in store.api_data.projections.allProjections.data">
                    <td class="text-center">{{ projection.movie.title }}</td>
                    <td class="text-center">{{ formatDate(projection.date) }}</td>
                    <td class="text-center">{{ projection.slot.start_time }}</td>
                    <td class="text-center">{{ projection.room.name }}</td>
                    <td class="text-center">{{ projection.final_ticket_price }}€</td>
                </tr>

            </tbody>
        </table>
    </div>
    <!-- <div>
       <input type="date">

       <select name="slot_id" id="" v-model="slot">
       <option value=""></option>
       <option :value="slot">pomeri</option>
       <option value="2"></option>
       <option value="3"></option>
      
       </select>
    </div> -->
</template>

<script>
import { store } from '../store';
import { format } from 'date-fns';
export default {
    name: 'ProjectionsListComponent',
    data() {
        return {
            store,
        }
    },
    methods: {
        formatDate(value) {
            if (!value) return '';
            return format(new Date(value), 'dd/MM/yyyy');
        }
    },
    created() {
        store.methods.getAllElements('projections');
    }
}
</script>

<style lang="scss" scoped></style>