<template lang="pug">
.tasks-tab.tab.tab-1
  .list
    p.day TASK LIST
    .add-new(v-on:click="showNew")
      p Add new task +
  .message.task.new.hidden
    .first-part-task
      h3 Название задачи
      input.new-input.new-title(
        placeholder="Введите название задачи",
        v-model="title"
      )
      //- :class="{ invalid: $v.title.$dirty && !$v.title.required }"
    .second-part-task
      h3 Описание задачи
      input.new-input.new-description(
        placeholder="Введите описание задачи",
        v-model="description"
      )
    .third-part-task
      h3 Время выполнения задачи
      input.new-input.new-description(
        placeholder="Введите время",
        v-model="time"
      )
    .controls
      fa.check-square(icon="check-square", v-on:click="addNew")
      fa.close-window(icon="window-close", v-on:click="removeNew")
  .message.task(
    v-for="(task, index) in TASKS",
    v-bind:key="index",
    v-bind:task_data="task"
  )
    .first-part-task
      h3 {{ task.title }}
      p {{ task.text }}
    p.time Выполнить до {{ task.time }}
    fa.trash-alt(icon="trash-alt", v-on:click="deleteTask(task.id)")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
// import { required } from "vuelidate/lib/validators";
import { required } from "@vuelidate/validators";

export default defineComponent({
  name: "Tasks",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      title: "",
      description: "",
      time: "",
    };
  },
  // validations: {
  //   title: { required },
  //   description: { required },
  //   time: { required },
  // },
  validations() {
    return {
      title: { required },
      description: { required },
      time: { required },
    };
  },
  methods: {
    ...mapActions(["SET_TASKS", "CREATE_NEW_TASK", "DELETE_TASK"]),
    showNew() {
      const newForm = document.querySelector(".new");
      newForm.classList.remove("hidden");

      // const main = document.querySelector<HTMLElement>(".main");
      // let width = main.style.width;
      // if (window.matchMedia("(max-width: 1024px)").matches && width == "75%") {
      //   const third_task =
      //     document.querySelector<HTMLElement>(".third-part-task");
      //   third_task.style.marginTop = "10px";
      // }
    },
    removeNew() {
      const newForm = document.querySelector(".new");
      newForm.classList.add("hidden");
    },
    addNew() {
      const newCard = {
        title: this.title,
        text: this.description,
        time: this.time,
        id: Date.now(),
      };
      this.CREATE_NEW_TASK(newCard);
      this.title = "";
      this.description = "";
      this.time = "";
      const newForm = document.querySelector(".new");
      newForm.classList.add("hidden");

      // if (this.$v.$invalid) {
      //   this.$v.$touch();
      //   return;
      // }
      // this.v$.$touch();
      // if (this.v$.$error) return;
      // alert("Form is valid");
    },
    deleteTask(id) {
      this.DELETE_TASK(id);
    },
  },
  computed: {
    ...mapGetters(["TASKS"]),
  },
  mounted() {
    // this.SET_TASKS();
    console.log(this.TASKS);
    // const main = document.querySelector<HTMLElement>(".main");
    // let width = main.style.width;
    // if (window.matchMedia("(max-width: 1024px)").matches && width == "75%") {
    //   const third_task =
    //     document.querySelector<HTMLElement>(".third-part-task");
    //   const controls = document.querySelector<HTMLElement>(".controls");
    //   controls.style.flexDirection = "row";
    //   third_task.style.marginTop = "10px";
    // }

    // const main = document.querySelector<HTMLElement>(".main");
    // const controls = document.querySelector<HTMLElement>(".controls");
    // const close_window = document.querySelector<HTMLElement>(".close-window");
    // let width = main.style.width;
    // if (width == "75%") {
    //   third_task.style.marginTop = "10px";
    //   controls.style.flexDirection = "initial";
    //   close_window.style.marginLeft = "10px";
    //   console.log("hey");
    // }
  },
});
</script>
<style scoped>
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
