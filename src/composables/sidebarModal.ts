import { ref } from "vue";

export function sideBarModal() {
  const modal = ref<boolean>(false);
  const completedTasks = ref<number>(372);
  const openedTasks = ref<number>(11);
  function changeNumber() {
    completedTasks.value += 1;
    openedTasks.value -= 1;
  }
  function hideModal() {
    modal.value = false;
  }
  function showModal() {
    modal.value = true;
    if (openedTasks.value == 0) {
      setTimeout(() => {
        hideModal();
      }, 2000);
    }
  }
  return {
    changeNumber,
    hideModal,
    showModal,
    modal,
    completedTasks,
    openedTasks,
  };
}
