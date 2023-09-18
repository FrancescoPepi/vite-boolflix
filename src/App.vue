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
      store.isLoading = true;
      console.log(queryKey);
      // axios film
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: `${queryKey}`,
            api_key: "bf6e1f29cefbb605f9ea14308881251b",
          },
        })
        .then((film) => {
          const paperinoObject = film.data.results.map((film) => {
            const {
              poster_path,
              original_title,
              title,
              vote_average,
              original_language,
              overview,
              release_date,
            } = film;
            return {
              poster_path,
              original_title,
              title,
              vote_average,
              original_language,
              overview,
              release_date,
            };
          });
          store.filmDetails = paperinoObject;
          console.log(paperinoObject);

          // CONTROLLO FILM TROVATO O MENO.
          if (store.filmDetails.length <= 0 && queryKey.length > 0) {
            console.log("Film Not Found");
          } else {
            console.log("Film Found");
          }
        })
        .finally(() => {
          store.isLoading = false;
        });

      // axios series

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: `${queryKey}`,
            api_key: "bf6e1f29cefbb605f9ea14308881251b",
          },
        })
        .then((serie) => {
          const detailsTemporany = serie.data.results.map((serie) => {
            const {
              poster_path,
              original_title,
              name,
              vote_average,
              original_language,
              overview,
            } = serie;
            return {
              poster_path,
              original_title,
              title: name,
              vote_average,
              original_language,
              overview,
            };
          });
          store.seriesDetails = detailsTemporany;
          // CONTROLLO FILM TROVATO O MENO.
          if (store.seriesDetails.length <= 0 && queryKey.length > 0) {
            console.log("Series Not Found");
          } else {
            console.log("Series Found");
          }
        })
        .finally(() => {
          store.isLoading = false;
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
  <LoaderComponent v-if="store.isLoading" />
  <HeaderComponent @query-key="fetchFilmDetails" />
  <MainComponent />
</template>

<style lang="scss">
body {
  background-color: rgb(23, 23, 23) !important;
  height: 100%;
}
</style>
