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

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

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
  <HeaderComponent />
</template>

<style lang="scss"></style>
