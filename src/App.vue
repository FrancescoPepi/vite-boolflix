<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
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
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: `${queryKey}`,
            api_key: "bf6e1f29cefbb605f9ea14308881251b",
          },
        })
        .then((film) => {
          const detailsTemporany = film.data.results.map((film) => {
            const {
              poster_path,
              original_title,
              title,
              vote_average,
              original_language,
            } = film;
            return {
              poster_path,
              original_title,
              title,
              vote_average,
              original_language,
            };
          });
          store.filmDetails = detailsTemporany;
          console.log(detailsTemporany);
        });
    },
  },

  components: {
    HeaderComponent,
    MainComponent,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <HeaderComponent @query-key="fetchFilmDetails" />
  <MainComponent />
</template>

<style lang="scss"></style>
