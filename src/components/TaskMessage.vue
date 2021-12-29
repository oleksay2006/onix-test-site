<template lang="pug">
.message.task(:class="{ new_animation: task.isNew }")
  .first-part-task
    h3.title {{ task.title }}
    p.text {{ task.text }}
  p.time Выполнить до {{ task.time }}
  fa.trash-alt(ref="del", icon="trash-alt", v-on:click="deleteTask(task.id)")
</template>
<script lang="ts">
// import { ref, defineComponent, onMounted } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskMesssage",
  props: ["task"],
});
</script>
<style scoped>
.animation {
  animation-name: font;
  animation-duration: 1s;
}
.animation_2 {
  animation-name: font_2;
  animation-duration: 1s;
}
.new_animation {
  animation-name: task;
  animation-duration: 1s;
}

@keyframes font {
  0% {
    font-size: 19px;
  }
  50% {
    font-size: 24px;
  }
}
@keyframes task {
  0% {
    background-color: #fff;
  }
  25% {
    background-color: gray;
  }
  50% {
    background-color: #fff;
  }
  75% {
    background-color: gray;
  }
  100% {
    background-color: #fff;
  }
}
</style>
