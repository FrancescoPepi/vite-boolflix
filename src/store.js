import { reactive } from "vue";

export const store = reactive({
  active: {
    filmActive: true,
    seriesActive: true,
  },
  filmDetails: [],
  seriesDetails: [],
  isLoading: false,
});
