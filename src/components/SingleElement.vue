<script>

export default {
    name: "SingleElement",
    data() {
        return {
            
        };
    },
    props: {
        elementData:{
            type: Object,
            defult: null
        }
    },
    computed: {
        flag(){
            if(this.elementData.original_lenguage == 'it'){
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }
            else if (this.elementData.original_lenguage == 'en'){
                return 'https://flagicons.lipis.dev/flags/4x3/en.svg'
            }
            else {
                return 'https://flagicons.lipis.dev/flags/4x3/un.svg'
            }
        }
    }
}

</script>

<template>
   <div>
        <ol>
            <li>
                <img :src="'https://image.tmdb.org/t/p/w342' + elementData.poster_path" :alt="elementData.title ?? elementData.name">
            </li>
            <li>
                 {{ elementData.title ?? elementData.name }} 
            </li>
            <li>
                {{ elementData.original_title ?? elementData.original_name }}
            </li>
            <li>
                <img :src="flag" :alt="elementData.original_lenguage.toUpperCase()">
            </li>
            <li>
                {{ Math.ceil(movie.vote_average / 2) }}
            </li>
            <div>
                <span v-for="numero in Math.ceil(movie.vote_average / 2)" :key="numero">
                    <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-solid fa-star" />
                </span>
                <span v-for="numero in (5 - Math.ceil(movie.vote_average / 2))" :key="numero">
                    <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-regular fa-star" />
                </span>
            </div>
        </ol>
   </div>
</template>

<style lang="scss" scoped>
    img{
        width: 40px;
}

</style>