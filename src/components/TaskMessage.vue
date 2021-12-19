<template lang="pug">
.message.task(:class="{ new_animation: task.isNew }")
  //- TaskDetailsModal(
  //-   v-show="isShowChange",
  //-   :task="task",
  //-   :key="'taskChange-' + task.id",
  //-   v-on:removeEditTask="removeEditTask()"
  //- )
  .first-part-task
    h3.title {{ task.title }}
    p.text {{ task.text }}
  p.time Выполнить до {{ task.time }}
  fa.trash-alt(icon="trash-alt", v-on:click="deleteTask(task.id)")
</template>
<script lang="ts">
// import { ref, defineComponent, onMounted } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskMesssage",
  // setup() {
  //   // Before the component is mounted, the value
  //   // of the ref is `[]` which is the default
  //   let num = 0;
  //   const divs = ref([]);
  //   onMounted(() => {
  //     divs.value.forEach((element) => {
  //       console.log("???");
  //       setTimeout(() => {
  //         element.classList.add("animation");
  //         console.log("Ooops: ", element.className);
  //       }, num);
  //       num += 500;
  //     });
  //   });
  //   return {
  //     divs,
  //     close,
  //   };
  // },
  props: ["task"],
  methods: {
    removeAnimation(task) {
      // setTimeout(() => {
      //   task.isNew = false;
      // }, 2000);
      console.log(task);
    },
  },
  mounted() {},
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
