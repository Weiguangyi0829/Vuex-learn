<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';
export default {
  name: 'app',
  components:{
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo
  },
  data () {
    return {
      products:[
        {name:"马云",price:200},
        {name:"马化腾",price:150},
        {name:"赵云",price:10},
        {name:"马超",price:20}

      ]
    }
  }
}
</script>

<style>

</style>
