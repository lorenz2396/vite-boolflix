<script>

export default {
    data() {
        return {
            
        };
    },
    props: {
        elementData:{
            type: Object,
            defult: null
        },
    },
    computed: {
        flag(){
            if(this.elementData.original_language == 'it'){
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }
            else if (this.elementData.original_language == 'en'){
                return 'https://flagicons.lipis.dev/flags/4x3/en.svg'
            }
            else if(this.elementData.original_language == 'ja'){
                return 'https://flagicons.lipis.dev/flags/4x3/ja.svg'
            }
            else{
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
                <img :src="flag" :alt="elementData.original_language.toUpperCase()">
            </li>
            <li>
                {{ Math.ceil(elementData.vote_average / 2) }}
            </li>
            <div>
                <span v-for="numero in Math.ceil(elementData.vote_average / 2)" :key="numero">
                    
                    <font-awesome-icon icon="fa-solid fa-star" />
                </span>
                <span v-for="numero in (5 - Math.ceil(elementData.vote_average / 2))" :key="numero">
                    ☆
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