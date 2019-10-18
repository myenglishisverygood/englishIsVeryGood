<template>
    <div id="Homepage">
      <router-view></router-view>
      <foots></foots>
    </div>
</template>

<script>

    import Foots from "./foots";
    import Shou from "./shou";
    export default {
      name: "Homepage",
      components: {Shou, Foots},
      data(){
        return {
          headerAddress :""
        }
      },
      created(){
        this.headerAddress = this.$route.query.add;
      },
    }
</script>

<style scoped>

</style>
