import Vue from "vue"
import store from "./store"
import router from "./router"
import App from "../App"
import api from "../services/api";


api.setup();
new Vue({
	  store,
	  router,
	  render: h => h(App)
}).$mount('#app')
