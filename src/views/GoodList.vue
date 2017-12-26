<template>
    <div>
        这是商品列表页面。
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.name}}</span>
      <router-link to="/goods/title">显示商品标题页面</router-link>
      <router-link to="/goods/image">显示商品图片页面</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link to="/cart">显示购物车页面</router-link>
      <button @click="jump">跳转到购物车页面</button>
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
        },
        methods:{
            jump(){
//                this.$router.push("/cart");
//                this.$router.push({path:'/cart'});
              this.$router.push({path:'/cart?goodsId=123'});
            }
        }
    }
</script>
