import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
 
// Your web app's Firebase configuration
 var firebaseConfig = {
	apiKey: "AIzaSyAAiYo_f5I53Ons6HOJDeXfBNGxW1gpW4I",
	authDomain: "ctribe-auth.firebaseapp.com",
	projectId: "ctribe-auth",
	storageBucket: "ctribe-auth.appspot.com",
	messagingSenderId: "886071365557",
	appId: "1:886071365557:web:fc536ed0fbbdc4299813fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
