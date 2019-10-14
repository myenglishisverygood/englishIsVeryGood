<template>
    <div id="Homepage">
      <Header></Header>
      <lunbo></lunbo>
      <foots></foots>
    </div>
</template>

<script>
    import Header from "./Header";
    import Lunbo from "./lunbo";
    import Foots from "./foots";
    export default {
      name: "Homepage",
      components: {Foots, Lunbo, Header},
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
