<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view class="top"/>
    <router-view class="left" name="title"></router-view>
    <router-view class="right" name="image"></router-view>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .left{
    width:20%;
    border: 1px solid gray;
    float: left;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  /*.left, .right{*/
    /*float:left;*/
    /*width:49%;*/
    /*border:1px solid grey;*/
  /*}*/
</style>
