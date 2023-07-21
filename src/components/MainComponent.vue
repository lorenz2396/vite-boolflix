<script>
import { store } from '../store.js'
import SingleElement from  './SingleElement.vue'


export default {
    name: "MainComponent",
    data() {
        return {
            store
        }
    },
    components:{
        SingleElement
    },
    methods: {
        // getFlag(lang){
        //     if(lang == 'it'){
        //         return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
        //     }
        //     else if (lang == 'en'){
        //         return 'https://flagicons.lipis.dev/flags/4x3/en.svg'
        //     }
        //     else {
        //         return 'https://flagicons.lipis.dev/flags/4x3/un.svg'
        //     }
        // }
    }
}
</script>

<template>
    <main>
        <h2>
            Movies
        </h2>
        <ul>
            <li v-for="(movie, i) in store.movies" :key="i">
                <SingleElement :elementData="movie"/>   
            </li>
        </ul>

        <hr>

        <h2>
            Series
        </h2>
        <ul>
            <li v-for="(singleSeries, i) in store.series" :key="i">
                <SingleElement :elementData="singleSeries"/>
                <!-- <ol>
                    <li>
                        {{ singleSeries.name }}
                    </li>
                    <li>
                        {{ singleSeries.original_name }}
                    </li>
                    <li>
                        <img :src="getFlag(singleSeries.original_lenguage)" :alt="singleSeries.original_lenguage.toUpperCase()">
                    </li>
                    <li>
                        {{ singleSeries.vote_average }}
                    </li>
                </ol> -->
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>