<template>
  <div id="app" v-cloak>
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

<style scoped>
#app {
  width: 100%;
  min-width: 1280px;
  height: 100%;
  background: #fafafa;
}
.welcome {
  width: 100%;
  font-size: 3.5rem;
  text-align: center;
  color: #4886ff;
  padding-top: 10rem;
}
#login {
  width: 100%;
}
#login .loading {
  top: 15rem !important;
}
</style>
