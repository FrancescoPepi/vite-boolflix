import { createApp } from "vue";
import App from "./App.vue";
import LoaderComponent from "./components/LoaderComponent.vue";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./style/general.scss";

// FONTAWSOME
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faStar, faSpinner);

const app = createApp(App);

app.component("LoaderComponent", LoaderComponent);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
