import Vue from "vue";
import a from "./a.js";
import App from "./App.vue";
import router from "./router";
alert(a());
new Vue({
  el: "#app",
  router,
  // store,
  components: { App },
  template: "<App/>"
});
