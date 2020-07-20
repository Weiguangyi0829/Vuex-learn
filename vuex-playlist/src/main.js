import Vue from 'vue'
import App from './App.vue'
import {mstore} from "./store/store";


new Vue({
  store:mstore,
  el: '#app',
  render: h => h(App)
})
