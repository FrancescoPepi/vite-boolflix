<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      link1: "https://image.tmdb.org/t/p/original",
    };
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
    film: Object,
  },
};
</script>

<template>
  <div class="col my-3">
    <div class="card" style="width: 18rem">
      <img
        :src="'https://image.tmdb.org/t/p/original' + film.poster_path"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="card-text">
          <p>{{ film.original_title }}</p>
          <p>{{ film.title }}</p>
          <p>{{ film.original_language }}</p>
          <p>{{ film.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
