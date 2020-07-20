import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const mstore = new Vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马化腾", price: 150 },
            { name: "赵云", price: 10 },
            { name: "马超", price: 20 }

        ]
    }
})