<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {};
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  props: {
    series: Object,
  },
};
</script>

<template>
  <div class="col my-3">
    <div class="card" style="width: 18rem">
      <img
        :src="'https://image.tmdb.org/t/p/original' + series.poster_path"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="card-text">
          <p>{{ series.original_title }}</p>
          <p>{{ series.title }}</p>
          <p>{{ series.original_language }}</p>
          <p>{{ series.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100% !important;
  color: lightgray;
}
</style>
