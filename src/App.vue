<template lang="pug">
#app
  Home/
</template>
<script lang="ts">
import Home from "@/views/Home.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Home,
  },
});
</script>

<style>
html,
body {
  height: 100%;
  /* тут*/
}
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* text-align: center;
  color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
