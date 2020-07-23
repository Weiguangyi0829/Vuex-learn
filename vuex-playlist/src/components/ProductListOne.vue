<template>
  <div id="product-list-one">
    <p>product-list-one</p>
    <ul>
      <li v-for="product in saleProducts" :key="product">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
    ...mapGetters([
      "saleProducts"
    ])
    //运行需要安装cnpm i babel-preset-stage-2 --save-dev
  },
  methods: {
    // reducePrice: function (amount) {
    //   this.$store.commit("reducePrice"); //store.js中的mutations方法名
    //   this.$store.dispatch("reducePrice", amount); //dispatch触发action当中的方法
    // },
    ...mapActions([
      "reducePrice"
    ])
  }, 
};
</script>

<style scoped>
#product-list-one {
  background: #91ca0b;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
}
</style>
