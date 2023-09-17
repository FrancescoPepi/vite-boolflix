<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      notFoundImg: "/no-pic.webp",
      maxStar: (Math.floor(this.movies.vote_average) / 2).toFixed(),
    };
  },

  methods: {
    on() {
      const card = document.querySelector(`[data-key="${this.index}"]`);
      card.querySelector(".card-body").style.bottom = "0";
      card.querySelector(".card-body").style.opacity = "100%";
      card.querySelector(".overview").style.bottom = "0";
      card.querySelector(".overview").style.opacity = "100%";
    },
    onClick() {
      // console.log("ciao");
      const card = document.querySelector(`[data-key="${this.index}"]`);
      card.querySelector(".card-body").style.left = "100%";
      card.querySelector(".overview").style.left = "0%";
    },
    off() {
      const card = document.querySelector(`[data-key="${this.index}"]`);
      card.querySelector(".card-body").style.left = "0";
      card.querySelector(".card-body").style.bottom = "-60%";
      card.querySelector(".card-body").style.opacity = "0";
      card.querySelector(".overview").style.left = "-100%";
      card.querySelector(".overview").style.bottom = "-60%";
      card.querySelector(".overview").style.opacity = "0";
    },
  },

  // components: {
  //	MyComponent,
  // },

  props: {
    movies: Object,
    index: Number,
  },
};
</script>

<template>
  <div class="col my-3">
    <div
      @mouseleave="off()"
      @mouseenter="on()"
      @click="onClick()"
      :data-key="index"
      class="card"
      style="width: 18rem"
    >
      <img
        v-if="movies.poster_path == null"
        :src="notFoundImg"
        class="card-img-top"
        alt="..."
      />
      <img
        v-else
        :src="'https://image.tmdb.org/t/p/original' + movies.poster_path"
        class="card-img-top"
        alt="..."
      />
      <!-- INFO FILM/SERIES -->
      <div class="card-body">
        <div class="card-text">
          <p v-show="movies.title.length">
            <span> TITOLO: </span> {{ movies.title }}
          </p>
          <!-- DATA -->
          <p v-if="movies.release_date">
            <span> RELEASE: </span>{{ movies.release_date }}
          </p>
          <p v-else="movies.release_date"><span> RELEASE: </span> NOT FOUND</p>
          <p
            v-if="
              movies.original_title != movies.title && movies.original_title
            "
          >
            <span> TITOLO ORIGINALE: </span> {{ movies.original_title }}
          </p>
          <p>
            <span> LINGUA: </span>
            <!-- FLAG -->
            <span>
              <img
                v-if="movies.original_language == 'en'"
                src="
              https://www.countryflagicons.com/SHINY/32/GB.png
            "
              />
              <img
                v-else-if="movies.original_language == 'ja'"
                src="
              https://www.countryflagicons.com/SHINY/32/JP.png
            "
              />
              <img
                v-else
                :src="
                  'https://www.countryflagicons.com/SHINY/32/' +
                  movies.original_language.toUpperCase() +
                  '.png'
                "
              />
            </span>
          </p>

          <p>
            <span> VOTO: </span>
            <span v-for="(star, index) in 5" :key="index">
              <font-awesome-icon
                :class="index < maxStar ? 'active' : ''"
                icon="fa-solid fa-star"
              />
            </span>
          </p>
        </div>
      </div>
      <!-- DESCRIZIONE FILM/SERIES -->
      <div class="overview">
        <div class="card-text">
          <p><span> TITOLO: </span> {{ movies.title }}</p>

          <p>{{ movies.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;

  height: 100% !important;
  color: white;
  overflow: hidden;
  p {
    margin-bottom: 1px;
  }
  .overview {
    padding: 1rem;
    height: 60%;
    width: 100%;
    background-color: #00000094;
    opacity: 0%;

    position: absolute;
    bottom: -60%;
    left: -100%;

    transition: all 0.3s ease-in-out;
    overflow-y: scroll;
  }
  .card-body {
    position: absolute;
    bottom: -60%;
    left: 0%;
    width: 100%;
    height: 60%;
    background-color: #00000094;
    opacity: 0%;
    transition: all 0.3s ease-in-out;
  }
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    font-weight: 800;
    color: rgb(192, 185, 185);
  }
  .active {
    color: red;
  }
}
</style>
