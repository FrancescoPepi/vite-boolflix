<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import axios from "axios";
import { store } from "./store.js";

export default {
  data() {
    return {
      title: "titolo",
      store,
    };
  },

  methods: {
    fetchFilmDetails(queryKey) {
      console.log(queryKey);
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: `${queryKey}`,
            api_key: "bf6e1f29cefbb605f9ea14308881251b",
          },
        })
        .then((film) => {
          const detailsTemporany = film.data.results.map((film) => {
            const { original_name, title, vote_average, original_language } =
              film;
            return { original_name, title, vote_average, original_language };
          });
          store.filmDetails = detailsTemporany;
          console.log(detailsTemporany);
        });
    },
  },

  components: {
    HeaderComponent,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <!-- <h1 class="btn btn-primary">{{ title }}</h1> -->
  <HeaderComponent @query-key="fetchFilmDetails" />
</template>

<style lang="scss"></style>
