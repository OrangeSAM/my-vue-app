import { createApp } from "vue";
import "./style.css";
// @ts-expect-error
import App from "./App.vue";
import VuePlus from "./components/index.js"; //导入

createApp(App).use(VuePlus).mount("#app");
