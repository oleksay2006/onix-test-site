<template lang="pug">
td.taskCard
  h4 {{ this.task.title }}
  p.time {{ this.task.time }}
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  name: "TaskCard",
  props: ["task"],
});
</script>
<style scoped>
.taskCard {
  padding: 5px 40px;
  border-radius: 10px;
}
</style>
