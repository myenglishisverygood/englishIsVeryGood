<template>
  <div id="app">
    <!--<ChangeCity></ChangeCity>-->
    <SuperVip></SuperVip>
  </div>
</template>

<script>
import ChangeCity from "./myenglish/ChangeCity";
import SuperVip from "./myenglish/SuperVip";
export default {
  name: 'App',
  components: {SuperVip, ChangeCity}
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
</style>
