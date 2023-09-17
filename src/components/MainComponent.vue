<script>
import MovieListComponent from "./MovieListComponent.vue";

export default {
  data() {
    return {
      title: "MAIN COMPONENT",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    MovieListComponent,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="container mt-5">
    <MovieListComponent />
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: white;
}
</style>
