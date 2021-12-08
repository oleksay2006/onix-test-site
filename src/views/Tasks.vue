<template lang="pug">
.tasks-tab.tab.tab-1
  .list
    p.day TASK LIST
    .add-new(v-on:click="showNew()")
      p Add new task +
  .message.task.new(v-show="isShow")
    .first-part-task
      h3 Название задачи
      input.new-input.new-title(
        placeholder="Введите название задачи",
        v-model="title",
        :class="{ invalid: v$.title.$error }"
      )
      span.helper(v-if="v$.title.$error") Это обязательное поле
    .second-part-task
      h3 Описание задачи
      input.new-input.new-description(
        placeholder="Введите описание задачи",
        v-model="description",
        :class="{ invalid: v$.title.$error }"
      )
      span.helper(v-if="v$.description.$error") Это обязательное поле
    .third-part-task
      h3 Время выполнения задачи
      input.new-input.new-description(
        placeholder="Введите время",
        v-model="time",
        :class="{ invalid: v$.title.$error }"
      )
      span.helper(v-if="v$.time.$error") Это обязательное поле
    .controls
      fa.check-square(icon="check-square", v-on:click="addNew()")
      fa.close-window(icon="window-close", v-on:click="removeNew()")
  .message.task(
    v-for="(task, index) in tasks",
    v-bind:key="index",
    v-bind:task_data="task",
    :class="{ new_animation: task.new }",
    :load="removeAnimation(task)"
  )
    .first-part-task
      h3.title {{ task.title }}
      p.text {{ task.text }}
    p.time Выполнить до {{ task.time }}
    fa.trash-alt(icon="trash-alt", v-on:click="deleteTask(task.id)")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import useVuelidate from "@vuelidate/core";
import { taskInterface } from "@/interfaces/task.interface";
import { required } from "@vuelidate/validators";

export default defineComponent({
  name: "Tasks",
  data() {
    return {
      v$: useVuelidate(),
      title: "",
      description: "",
      time: "",
      isShow: false,
    };
  },
  validations() {
    return {
      title: { required },
      description: { required },
      time: { required },
    };
  },
  methods: {
    ...mapActions(["SET_TASKS", "CREATE_NEW_TASK", "DELETE_TASK"]),
    removeAnimation(task) {
      setTimeout(() => {
        task.new = false;
      }, 2000);
    },
    showNew() {
      this.isShow = true;
    },
    removeNew() {
      this.isShow = false;
    },
    addNew() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const newCard: taskInterface = {
          title: this.title,
          text: this.description,
          time: this.time,
          id: Date.now(),
          new: true,
        };
        this.CREATE_NEW_TASK(newCard);
        this.title = "";
        this.description = "";
        this.time = "";
        this.removeNew();
      }
    },
    deleteTask(id) {
      this.DELETE_TASK(id);
    },
  },
  computed: {
    ...mapState(["tasks"]),
  },
  mounted() {
    let messages = document.querySelectorAll(".message");
    messages.forEach((element) => {
      if (element.classList.contains("new_animation")) {
        element.classList.remove("new_animation");
      }
    });

    let titles = document.querySelectorAll(".title");
    let num = 0;
    titles.forEach((element) => {
      setTimeout(() => {
        element.classList.add("animation");
        console.log(element);
      }, num);

      num += 500;
    });
  },
});
</script>
<style scoped>
.helper {
  margin-top: 3px;
  font-size: 13px;
  color: red;
}
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
/* @keyframes font_2 {
  0% {
    font-size: 16px;
  }
  50% {
    font-size: 18px;
  }
} */
.invalid {
  border: 1px solid red !important;
  display: block;
}
.trash-alt {
  font-size: 20px;
  color: DarkGrey;
  cursor: pointer;
}
.new {
  flex-wrap: wrap;
}
.controls {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.check-square {
  cursor: pointer;
  font-size: 33px;
}
.close-window {
  cursor: pointer;
  font-size: 30px;
}
.hidden {
  display: none;
}
.new-input {
  margin-top: 10px;
  padding: 6px 13px;
  border-radius: 5px;
  border: 1px solid #cfd8dc;
  font-size: 14px;
  width: 170px;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.add-new {
  background-color: #eaeaea;
  /* height: 35px;
  width: 120px; */
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
}
.add-new p {
  /* margin-top: 8px; */
  /* color: #fff; */
}
@media only screen and (max-width: 768px) {
  .new {
    flex-wrap: wrap;
  }
  .third-part-task {
    margin-top: 10px;
  }
  .controls {
    margin-top: 20px;
    flex-direction: row;
  }
  .close-window {
    margin-left: 10px;
    font-size: 33px;
  }
  .tasks-tab {
    width: 80%;
  }
  @keyframes font {
    0% {
      font-size: 19px;
    }
    50% {
      font-size: 22px;
    }
  }
}
@media only screen and (max-width: 480px) {
  .second-part-task {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 400px) {
  .tasks-tab {
    padding: 20px;
  }
}
</style>
