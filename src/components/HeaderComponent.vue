<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      title: "titolo",
      searchName: "",
      store,
      filmActive: false,
      seriesActive: false,
    };
  },

  methods: {
    activeFilm() {
      this.filmActive ? (this.filmActive = false) : (this.filmActive = true);
      // store.active.filmActive = this.filmActive;
    },

    activeSeries() {
      this.seriesActive
        ? (this.seriesActive = false)
        : (this.seriesActive = true);
      console.log(this.seriesActive);
      // store.active.seriesActive = this.seriesActive;
    },
  },

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
  emits: ["query-key"],
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BoolFlix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a
              @click="activeFilm()"
              :class="filmActive ? 'active' : ''"
              id="film"
              class="nav-link"
              aria-current="page"
              href="#"
              >Film</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="series"
              @click="activeSeries()"
              :class="seriesActive ? 'active' : ''"
              aria-current="page"
              href="#"
              >Series</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchName"
          />
          <button
            class="btn btn-danger"
            @keyup.enter="
              $emit('query-key', searchName, filmActive, seriesActive)
            "
            :class="searchName.length <= 0 ? 'disabled' : ''"
            @click.prevent="
              $emit('query-key', searchName, filmActive, seriesActive)
            "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  z-index: 8;
  background-color: black !important;
  .navbar-brand {
    color: red;
    font-weight: 900;
    padding: 0 20px;
  }
  .navbar-nav a {
    color: white;
  }
  .navbar-nav a.active {
    color: red;
    font-weight: 600;
  }
}
</style>
