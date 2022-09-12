import Vue from 'vue'
import VueRouter from "vue-router";
import axios from "axios";
import App from "./App.vue";
import Signup from "./Authentication/Signup.vue";
import VueTable from "./components/VuetifyDatatable.vue";
import SignIn from "./Authentication/SignIn.vue";
import store from "./store";

//add vuetify plugin
import vuetify from "@/plugins/vuetify";
import Notifications from "vue-notification";
import VueCookie from "vue-cookie";

const routes = [
  { path: "/signup", component: Signup },
  {
    path: "/dashboard",
    component: VueTable,
  },
  { path: "/", component: SignIn },
];
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

Vue.config.productionTip = false;
axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`;
Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(VueCookie);

new Vue({
  //add vuetify to vue
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
