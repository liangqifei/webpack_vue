<template>
  <div id="app" v-cloak>
    <img src="../static/logo.png">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  text-align: center;
}
</style>
