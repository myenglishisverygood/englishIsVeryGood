<template>
  <div>
    <Header></Header>
    <lunbo></lunbo>
  </div>
</template>

<script>
    import Header from "./Header";
    import Lunbo from "./lunbo";

    export default {
        name: "shou",
      components: {Lunbo, Header}
    }
</script>

<style scoped>

</style>
