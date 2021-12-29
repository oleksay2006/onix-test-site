<template lang="pug">
td.taskCard(:class="{ outdated: isOutdated, soon: isSoon, future: isFuture }")
  h4 {{ this.task.title }}
  p.time {{ this.task.time }}
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  name: "TaskCard",
  props: ["task"],
  data() {
    return {
      // isOutdated: false,
      // isSoon: false,
      // isFuture: false,
    };
  },
  computed: {
    isOutdated() {
      const x = new Date(this.task.time);
      const y = new Date();
      return y.getFullYear() >= x.getFullYear() &&
        y.getDate() > x.getDate() &&
        y.getMonth() >= x.getMonth()
        ? true
        : false;
    },
    isSoon() {
      const x = new Date(this.task.time);
      const y = new Date();
      return x.getFullYear() === y.getFullYear() &&
        x.getDate() === y.getDate() &&
        x.getMonth() === y.getMonth()
        ? true
        : false;
      // if (
      //   x.getFullYear() === y.getFullYear() &&
      //   x.getDate() === y.getDate() &&
      //   x.getMonth() === y.getMonth()
      // ) {
      //   return true;
      // }
    },
    isFuture() {
      const x = new Date(this.task.time);
      const y = new Date();
      return x > y ? true : false;
    },
  },
});
</script>
<style scoped>
.future {
  background-color: LightGreen !important;
}
.soon {
  background-color: Gold !important;
}
.outdated {
  background-color: OrangeRed !important;
}
.taskCard {
  padding: 10px 40px;
  border-radius: 10px;
  text-align: center;
}
</style>
