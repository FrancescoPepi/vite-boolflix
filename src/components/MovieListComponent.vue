<script>
import MovieCardComponent from "./MovieCardComponent.vue";
// import SeriesCardComponent from "./SeriesCardComponent.vue";
import { store } from "../store.js";

export default {
  data() {
    return {
      movie: "Move List",
      series: "Series List",
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
  <h1>{{ movie }}</h1>
  <div class="container">
    <div class="row row-cols-4">
      <MovieCardComponent
        v-for="(card, index) in store.filmDetails"
        :movies="store.filmDetails[index]"
        :index="index"
        :key="index"
      />
    </div>
  </div>
  <h1>{{ series }}</h1>
  <div class="container">
    <div class="row row-cols-4">
      <MovieCardComponent
        v-for="(card, index) in store.seriesDetails"
        :movies="store.seriesDetails[index]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
