<template lang="pug">
.mainModal2(ref="modal_wrapper")
  .modal_wrapper
    .modal
      .div_form
        .message.task(v-if="NotEdit")
          .first-part-task
            h3.title {{ this.currentTask.title }}
            p.text {{ this.currentTask.text }}
          p.time Выполнить до {{ this.currentTask.time }}
        .first-part-task(v-if="WantEdit")
          //- v-show="WantEdit"
          h3 Название задачи
          textarea.new-input.new-title(
            placeholder="Введите название задачи",
            v-model="v$.title.$model",
            :class="{ invalid: v$.title.$error }"
          )
          span.helper(v-if="v$.title.$error") Это обязательное поле
        .second-part-task(v-if="WantEdit")
          h3 Описание задачи
          textarea.new-input.new-description(
            placeholder="Введите описание задачи",
            v-model="v$.description.$model",
            :class="{ invalid: v$.description.$error }"
          )
          span.helper(v-if="v$.description.$error") Это обязательное поле
        .third-part-task(v-if="WantEdit")
          h3.taskTime Дата выполнения задачи
          //- textarea.new-input.new-description(
          //-   placeholder="Введите время",
          //-   v-model="v$.time.$model",
          //-   :class="{ invalid: v$.time.$error }"
          //- )
          input.dateInput(
            v-model="v$.time.$model",
            type="date",
            name="trip-start",
            min="2021-12-21",
            max="2022-12-31",
            :class="{ invalid: v$.time.$error }"
          )
          span.helper(v-if="v$.time.$error") Это обязательное поле
        .controls
          a.edit.Button(
            href="#",
            v-on:click.prevent="Edit()",
            v-show="NotEdit"
          ) Edit
          a.save.Button(
            href="#",
            v-on:click.prevent="changeTask()",
            v-if="v$.title.$dirty || v$.description.$dirty || v$.time.$dirty"
          ) Save
          a.cancel.Button(href="#", v-on:click.prevent="removeEditTask()") Cancel
</template>
<script lang="ts">
import { mapState, mapActions } from "vuex";
import { defineComponent } from "vue";
import { required } from "@vuelidate/validators";
import Status from "@/enums/StatusEnum";
import useVuelidate from "@vuelidate/core";

export default defineComponent({
  name: "TaskDetailsModal",
  mounted() {
    console.log(this.v$);
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      title: "",
      description: "",
      time: "",
      WantEdit: false,
      NotEdit: true,
      WantSave: true,
      Status,
    };
  },
  props: ["currentTask"],
  validations() {
    return {
      title: { required },
      description: { required },
      time: { required },
    };
  },
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions(["CREATE_NEW_TASK", "CHANGE_TASK"]),
    Edit() {
      this.title = this.currentTask.title;
      this.description = this.currentTask.text;
      this.time = this.currentTask.time;
      this.NotEdit = false;
      this.WantEdit = true;
    },
    removeEditTask() {
      this.$emit("removeEditTask");
      this.NotEdit = true;
      this.WantEdit = false;
      this.v$.title.$dirty = false;
      this.v$.description.$dirty = false;
      this.v$.time.$dirty = false;
    },
    changeTask() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const changedTask = {
          title: this.title,
          text: this.description,
          time: this.time,
          id: this.currentTask.id,
        };
        this.CHANGE_TASK(changedTask);
        this.removeEditTask();
      } else {
        this.v$.$dirty = false;
        console.log(this.v$);
      }
    },
  },
});
</script>
<style scoped>
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
}

#boardName {
  padding: 2.5px 1.5px 1px 3.5px;
  margin-top: 5px;
  border: 1.5px solid black;
}

.div_form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
}
@media only screen and (max-width: 768px) {
  .third-part-task {
    margin-top: 10px;
  }
  .controls {
    margin-top: 5px;
  }
}
@media only screen and (max-width: 480px) {
  .second-part-task {
    margin-top: 10px;
  }
}
</style>
