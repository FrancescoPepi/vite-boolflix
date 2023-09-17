<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      title: "titolo",
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

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="layover d-flex flex-column">
    <span class="m-3">LOADING</span>
    <font-awesome-icon icon="fa-solid fa-spinner" spin size="3x" />
  </div>
</template>

<style lang="scss" scoped>
.layover {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(255, 255, 255, 0.514);
  backdrop-filter: blur(5px);
  font-size: 30px;
  font-weight: 900;
}
</style>
