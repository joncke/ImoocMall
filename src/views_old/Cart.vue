<template>
    <div>
      这是购物车页面。
      <span>{{$route.query.cartId}}</span>
      <span>{{$route.params.cartId}}</span>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                msg: "hello vue"
            }
        }
    }
</script>
