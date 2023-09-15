<script>
import MovieCardComponent from "./MovieCardComponent.vue";
import { store } from "../store.js";

export default {
  data() {
    return {
      title: "Move List",
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
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="container">
    <div class="row row-cols-4">
      <MovieCardComponent
        v-for="(card, index) in store.filmDetails"
        :film="store.filmDetails[index]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  border: 1px dashed red;
}
</style>
