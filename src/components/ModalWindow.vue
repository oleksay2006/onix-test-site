<template lang="pug">
.mainModal(ref="modal_wrapper")
  .modal_wrapper
    .modal
      .div_form
        label(for="boardName")
          p.good(v-if="openedTasks > 0") Are you sure you want to change the number of tasks?
          p.bad(v-if="openedTasks == 0") No opened tasks!
        .modal-buttons(v-if="openedTasks > 0")
          button.modalButton.first-button(
            type="button",
            @click="changeNumber()"
          ) Yes
          button.modalButton.second-button(type="button", @click="hideModal()") No
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "ModalWindow",
  props: ["openedTasks"],
  data() {
    return {};
  },
  setup(props, { emit }) {
    const { openedTasks } = toRefs(props);
    function hideModal() {
      emit("hideModal");
    }
    function changeNumber() {
      if (openedTasks.value > 0) {
        hideModal();
        emit("changeNumber");
      }
    }
    return {
      hideModal,
      changeNumber,
    };
  },
});
</script>
<style scoped lang="sass">
.modal_wrapper
  padding: 20px
  width: 25vw
  background-color: #fff
  border-radius: 15px

.mainModal
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.7)
  position: fixed
  top: 0px
  left: 0
  display: flex
  justify-content: center
  align-items: center
  z-index: 1

#boardName
  padding: 2.5px 1.5px 1px 3.5px
  margin-top: 5px
  border: 1.5px solid black

.div_form
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center

  & p
    text-align: center
    font-size: 19px

.modalButton
  background-color: #ffe4b5
  border: none
  padding: 5px 15px
  cursor: pointer

.first-button
  margin-right: 10px

.second-button
  margin-left: 10px

.modal-buttons
  margin-top: 10px
  display: flex
  justify-content: space-around

.hidden
  display: none

@media only screen and (max-width: 1024px)
  .modal_wrapper
    width: 30vw

@media only screen and (max-width: 768px)
  .modal_wrapper
    width: 40vw

@media only screen and (max-width: 400px)
  .modal_wrapper
    width: 50vw
</style>
