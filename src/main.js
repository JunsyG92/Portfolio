import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import vuetify from "./plugins/vuetify";
import VueFullPage from "vue-fullpage.js";
import store from './store'

Vue.use(VueFullPage);
axios.defaults.baseURL = "http://localhost:3000/api/";
const token = sessionStorage.getItem("token");

if (token) {
	axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
// Prototypes
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: (h) => h(App)
}).$mount("#app");
