// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
// import './style.css'

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
