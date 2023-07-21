<script>
import { store } from '../store.js';

export default {
    name: "HeaderComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <header>
        <input v-model="store.searchText" type="text" placeholder="Cerca...">
        <button @click.enter="$emit('performSearch')">
            Cerca
        </button>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 40px;
    text-align: center;
}
</style>