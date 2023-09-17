<script>
import MovieCardComponent from "./MovieCardComponent.vue";
import { store } from "../store.js";

export default {
  data() {
    return {
      movie: "Move List",
      series: "Series List",
      notFound: "Fai la tua ricerca",
      store,
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    MovieCardComponent,
    // SeriesCardComponent,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <!-- PAGINA VUOTA -->
  <div class="container">
    <h1
      class="text-center"
      v-show="store.filmDetails.length <= 0 || store.seriesDetails.length <= 0"
    >
      {{ notFound }}
    </h1>
  </div>
  <!-- MOVIE -->
  <div class="container">
    <h1 v-show="store.filmDetails.length > 0">{{ movie }}</h1>
    <div class="row row-cols-4">
      <MovieCardComponent
        v-for="(card, index) in store.filmDetails"
        :movies="store.filmDetails[index]"
        :index="index"
        :key="index"
      />
    </div>
  </div>
  <!-- SERIES -->
  <div class="container">
    <h1 v-show="store.seriesDetails.length > 0">{{ series }}</h1>
    <div class="row row-cols-4">
      <MovieCardComponent
        v-for="(card, index) in store.seriesDetails"
        :movies="store.seriesDetails[index]"
        :index="store.filmDetails.length + index"
        :key="index"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
