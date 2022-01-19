<template lang="pug">
.mainModal2(ref="modal_wrapper")
  .modal_wrapper
    .modal
      .div_form
        .message.task(v-if="NotEdit")
          .first-part-task
            h3.title {{ this.currentTask.customData.title }}
            p.text {{ this.currentTask.customData.text }}
          p.time Выполнить до {{ this.currentTask.customData.time }}
        .first-part-task(v-if="WantEdit")
          h3 Название задачи
          textarea.new-input.new-title(
            placeholder="Введите название задачи",
            v-model="v$.title.$model",
            :class="{ invalid: v$.title.$error, isDone: currentTask.customData.status == Status.done }"
          )
          span.helper(v-if="v$.title.$error") Это обязательное поле
        .second-part-task(v-if="WantEdit")
          h3 Описание задачи
          textarea.new-input.new-description(
            placeholder="Введите описание задачи",
            v-model="v$.description.$model",
            :class="{ invalid: v$.description.$error, isDone: currentTask.customData.status == Status.done }"
          )
          span.helper(v-if="v$.description.$error") Это обязательное поле
        .third-part-task(v-if="WantEdit")
          h3.taskTime Дата выполнения задачи
          input.dateInput(
            v-model="v$.time.$model",
            type="date",
            name="trip-start",
            min="2021-12-01",
            max="2022-12-31",
            :class="{ invalid: v$.time.$error, isDone: currentTask.customData.status == Status.done }"
          )
          span.helper(v-if="v$.time.$error") Это обязательное поле
        .fourth-part-task(v-if="WantEdit")
          h3 Статус задачи
          span.custom-dropdown.big
            select(
              v-model="v$.select.$model",
              :class="{ isDone: currentTask.customData.status == Status.done }"
            )
              option {{ Status.toDo }}
              option {{ Status.inProgress }}
              option {{ Status.done }}
        .controls(:class="{ editControls: WantEdit }")
          a.edit.Button(
            href="#",
            v-on:click.prevent="edit()",
            v-show="ifCalendar"
          ) Edit
          a.cancel.Button(href="#", v-on:click.prevent="removeEditTask()") Cancel
          a.save.Button(
            href="#",
            v-on:click.prevent="changeTask()",
            v-if="v$.title.$dirty || v$.description.$dirty || v$.time.$dirty || v$.select.$dirty",
            :class="{ editSaveButton: WantEdit }"
          ) Save
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { required } from "@vuelidate/validators";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import useVuelidate from "@vuelidate/core";

export default defineComponent({
  name: "TaskDetailsModal",
  setup() {
    const store = useStore();
    const v$ = useVuelidate();
    function changeTask() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const changedTask: taskInterface = {
          customData: {
            id: this.currentTask.customData.id,
            title: this.title,
            text: this.description,
            time: this.time,
            isNew: this.currentTask.customData.isNew,
            status: this.select,
          },
        };
        store.dispatch("tasksModule/CHANGE_TASK", changedTask);
        this.removeEditTask();
      } else {
        this.v$.$dirty = false;
      }
    }
    return {
      v$,
      changeTask,
    };
  },
  data() {
    return {
      title: "",
      description: "",
      time: "",
      WantEdit: false,
      NotEdit: true,
      NotEditTask: true,
      WantSave: true,
      select: "",
      Status,
    };
  },
  props: ["currentTask", "isCalendar"],
  validations() {
    return {
      title: { required },
      description: { required },
      time: { required },
      select: { required },
    };
  },
  watch: {
    isCalendar() {
      console.log("isCalendar changed: ", this.isCalendar);
    },
  },
  computed: {
    ifCalendar() {
      if (this.isCalendar == false) {
        return this.isCalendar;
      } else {
        return this.NotEdit;
      }
    },
  },
  methods: {
    edit() {
      this.title = this.currentTask.customData.title;
      this.description = this.currentTask.customData.text;
      this.time = this.currentTask.customData.time;
      this.select = this.currentTask.customData.status;
      this.NotEdit = false;
      this.NotEditTask = false;
      this.WantEdit = true;
      setTimeout(() => {
        if (this.currentTask.customData.status == Status.done) {
          alert("You can't edit this task, because it's done");
        }
      }, 100);
    },
    removeEditTask() {
      this.$emit("removeEditTask");
      this.NotEdit = true;
      this.NotEditTask = true;
      this.WantEdit = false;
      this.v$.title.$dirty = false;
      this.v$.description.$dirty = false;
      this.v$.time.$dirty = false;
      this.v$.select.$dirty = false;
    },
  },
});
</script>
<style scoped>
.isDone {
  resize: none;
  pointer-events: none;
}
/***********************************************/
.big {
  font-size: 1.2em;
}

/* Custom dropdown */
.custom-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px; /* demo only */
}

.custom-dropdown select {
  cursor: pointer;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  padding: 10px 50px 10px 10px;
  padding-right: 2.5em;
  border: 1px solid #cfd8dc;
  margin: 0;
  border-radius: 5px;
  text-indent: 0.01px;
  text-overflow: "";
  -webkit-appearance: button; /* hide default arrow in chrome OSX */
}

.custom-dropdown select[disabled] {
  color: rgba(0, 0, 0, 0.3);
}

.custom-dropdown select[disabled]::after {
  color: rgba(0, 0, 0, 0.1);
}

.custom-dropdown::before {
  background-color: rgba(0, 0, 0, 0.15);
}

.custom-dropdown::after {
  color: rgba(0, 0, 0, 0.4);
}
/***********************************************/
.fourth-part-task {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.dateInput {
  width: 351px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #cfd8dc;
}
.taskTime {
  margin-bottom: 10px;
}
textarea {
  min-width: 345px;
  max-width: 300px;
  max-height: 200px;
}
.message {
  margin-top: 0px;
}
.save {
  margin-top: 20px;
  margin-bottom: 20px;
}
.editSaveButton {
  margin: 0 15px 0 0;
}
.save:hover {
  background: #2ee59d;
  box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
  color: white;
  transform: translateY(-3px);
}
/* .cancel {
  margin-top: 20px;
} */
.cancel:hover {
  background: #eb3131;
  box-shadow: 0 15px 20px rgba(235, 49, 49, 0.4);
  color: white;
  transform: translateY(-3px);
}
.Button {
  text-decoration: none;
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 45px;
  border-radius: 45px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: LightGrey;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.edit {
  margin-bottom: 20px;
}
.edit:hover {
  background: #2ee59d;
  box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
  color: white;
  transform: translateY(-3px);
}
.trash-alt {
  font-size: 20px;
  color: DarkGrey;
  cursor: pointer;
}
.new {
  flex-wrap: wrap;
}
.editControls {
  grid-column-start: 1;
  grid-column-end: 3;
  flex-direction: row-reverse !important;
  margin-top: 10px;
}
.controls {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* margin-top: 15px; */
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
.first-part-task {
  /* display: block; */
  display: flex;
  flex-direction: column;
}
.second-part-task {
  display: flex;
  flex-direction: column;
}
.third-part-task {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.first-part-task p {
  width: 460px;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-top: 10px;
}
.task {
  border: 1px solid #d3d3d3;
  padding: 15px;
  border-radius: 15px;
  align-items: center;
}
/***********************************/
.invalid {
  border: 1px solid red !important;
  display: block;
}
.helper {
  margin-top: 3px;
  font-size: 13px;
  color: red;
}
.modal_wrapper {
  padding: 20px;
  width: 65vw;
  background-color: #fff;
  border-radius: 15px;
}

.mainModal2 {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

#boardName {
  padding: 2.5px 1.5px 1px 3.5px;
  margin-top: 5px;
  border: 1.5px solid black;
}

.div_form {
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
}

.modalButton {
  background-color: #ffe4b5;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
}

.first-button {
  margin-right: 10px;
}

.second-button {
  margin-left: 10px;
}

.modal-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.hidden {
  display: none;
}
@media only screen and (max-width: 1024px) {
  .modal_wrapper {
    width: 70vw;
  }
  textarea {
    min-width: 262px;
    max-width: 262px;
  }
  .first-part-task p {
    width: 355px;
  }
  .dateInput {
    width: 268px;
  }
}
@media only screen and (max-width: 768px) {
  .third-part-task {
    margin-top: 10px;
  }
  .Button {
    width: 85px;
  }
  .first-part-task p {
    width: 315px;
  }
  textarea {
    min-width: 222px;
    max-width: 222px;
  }
  .dateInput {
    width: 228px;
  }
}
@media only screen and (max-width: 640px) {
  .modal_wrapper {
    width: 80vw;
  }
}
@media only screen and (max-width: 480px) {
  .second-part-task {
    margin-top: 10px;
  }
  .first-part-task p {
    width: 200px;
  }
  .div_form {
    display: flex;
    flex-direction: column;
  }
  .controls {
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .edit {
    margin-bottom: 0px;
  }
  .cancel {
    margin-left: 10px;
  }
  textarea {
    max-height: 100px;
  }
}
</style>
