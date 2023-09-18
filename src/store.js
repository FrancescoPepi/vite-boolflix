import { reactive } from "vue";

export const store = reactive({
  active: {
    filmActive: false,
    seriesActive: false,
  },
  filmDetails: [],
  seriesDetails: [],
  isLoading: false,
});
