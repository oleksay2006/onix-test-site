<template lang="pug">
.mainModal(ref="modal_wrapper")
  .modal_wrapper
    .modal
      .div_form
        .first-part-task
          h3 Название задачи
          input.new-input.new-title(
            placeholder="Введите название задачи",
            v-model="v$.title.$model",
            :class="{ invalid: v$.title.$error }"
          )
          span.helper(v-if="v$.title.$error") Это обязательное поле
        .second-part-task
          h3 Описание задачи
          input.new-input.new-description(
            placeholder="Введите описание задачи",
            v-model="v$.description.$model",
            :class="{ invalid: v$.description.$error }"
          )
          span.helper(v-if="v$.description.$error") Это обязательное поле
        .third-part-task
          h3 Дата выполнения задачи
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
          fa.check-square(icon="check-square", v-on:click="addNew()")
          fa.close-window(icon="window-close", v-on:click="$emit('removeNew')")
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";
import Status from "@/enums/StatusEnum";
import useVuelidate from "@vuelidate/core";

export default defineComponent({
  name: "AddTaskModal",
  setup(props, { emit }) {
    const state = reactive({
      title: "",
      description: "",
      time: "",
    });
    const rules = {
      title: { required },
      description: { required },
      time: { required },
    };

    const v$: any = useVuelidate(rules, state);
    const store = useStore();
    function addNew() {
      v$.value.$validate();
      if (!v$.value.$error) {
        const newCard: taskInterface = {
          customData: {
            id: Date.now(),
            title: state.title,
            text: state.description,
            time: state.time,
            isNew: false,
            status: Status.toDo,
          },
          dates: new Date(),
        };
        store.dispatch("tasksModule/CREATE_NEW_TASK", newCard);
        state.title = "";
        state.description = "";
        state.time = "";
        emit("removeNew");
      }
    }
    return {
      addNew,
      v$,
    };
  },
});
</script>
<style scoped>
.dateInput {
  border-radius: 5px;
  padding: 4px 13px;
  border: 1px solid #cfd8dc;
  margin-top: 10px;
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
  width: 55vw;
  background-color: #fff;
  border-radius: 15px;
}

.mainModal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
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

.div_form p {
  text-align: center;
  font-size: 19px;
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
