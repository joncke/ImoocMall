<!--双向绑定-->
<template>
    <div>
      <button @click="increment">+</button>
      <button v-on:click="decrement">-</button>
      <p><span>Counter: {{num}}</span></p>
    </div>
</template>
<style>

</style>
<script>
    export default {
        props:['num'],
        data() {
            return {
                num:0,
//                msg: "hello vue"
            }
        },
        methods:{
          increment(){
//              this.num++;
            this.$emit('incre');
          },
          decrement(){
//              this.num--;
            this.$emit('decre');
          }
        }

    }
</script>
