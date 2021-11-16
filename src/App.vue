<template lang="pug">
#app
  component(:is="layout")
    router-view/
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default defineComponent({
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "empty"}-layout`;
    },
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
