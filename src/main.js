import Vue from 'vue'
import VueRouter from "vue-router";
import App from "./App.vue";
import Signup from "./Authentication/Signup.vue";
import VueTable from "./components/VuetifyDatatable.vue";
import SignIn from "./Authentication/SignIn.vue";

//add vuetify plugin
import vuetify from "@/plugins/vuetify";
const routes = [
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: VueTable },
  { path: "/signin", component: SignIn },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  //add vuetify to vue
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
