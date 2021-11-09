<template lang="pug">
.tasks-tab.tab.tab-1
  p.day TASK LIST
  .message.task(
    v-for="task in TASKS",
    v-bind:key="task.title",
    v-bind:task_data="task"
  )
    .first-part-task
      h3 {{ task.title }}
      p {{ task.text }}
    p.time Выполнить до {{ task.time }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Tasks",
  methods: {
    ...mapActions(["SET_TASKS"]),
  },
  computed: {
    ...mapGetters(["TASKS"]),
  },
  mounted() {
    this.SET_TASKS();
  },
});
</script>
