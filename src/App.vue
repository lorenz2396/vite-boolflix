<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

import axios from 'axios';

import { store } from './store.js'

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {
      store
    };
  },
  methods: {
    search(){
          axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 'd9e68ded37098fa0b95877517d185750',
              query: this.store.searchText
            }
          })
          .then(res =>{
            console.log(res.data)

            this.store.movies = res.data.result
          });
          axios.get('https://api.themoviedb.org/3/search/tv', {
            params: {
              api_key: 'd9e68ded37098fa0b95877517d185750',
              query: this.store.searchText
            }
          })
          .then(res =>{
            console.log(res.data)

            this.store.series = res.data.result
          })    
    },
    
  },
};
</script>

<template>
  <HeaderComponent @performSearch="search()"/>

  <MainComponent />
</template>

<style lang="scss">
@use "assets/scss/main";
</style>