<template>
  <div class="mainModal hidden" ref="modal_wrapper">
    <div class="modal_wrapper">
      <div class="modal">
        <div class="div_form">
          <label for="boardName">
            <p class="good">
              Are you sure you want to change the number of tasks?
            </p>
            <p class="bad hidden">No opened tasks!</p>
          </label>
          <!-- <input type="text" id="boardName" placeholder="Пишите название здесь" v-model="title" /> -->
          <div class="modal-buttons">
            <button type="button" class="modalButton first-button">Yes</button>
            <button type="button" class="modalButton second-button">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalWindow",
  components: {},
  mounted() {
    let modal = document.querySelector(".mainModal");
    let modalButton_Yes = document.querySelector(".first-button");
    let modalButton_No = document.querySelector(".second-button");
    let completedTask = document.querySelector(".completed");
    let num_1 = document.querySelector(".completed_nums");
    let num_2 = document.querySelector(".opened_nums");
    let good = document.querySelector(".good");
    let bad = document.querySelector(".bad");
    let tasks = 372;
    let opened_tasks = 11;

    num_1.innerHTML = tasks;
    num_2.innerHTML = opened_tasks;

    completedTask.addEventListener("click", () => {
      modal.classList.remove("hidden");
      if (opened_tasks == 0) {
        good.classList.add("hidden");
        bad.classList.remove("hidden");
        modalButton_Yes.classList.add("hidden");
        modalButton_No.classList.add("hidden");
        setTimeout(() => {
          modal.classList.add("hidden");
          good.classList.remove("hidden");
          bad.classList.add("hidden");
          modalButton_Yes.classList.remove("hidden");
          modalButton_No.classList.remove("hidden");
        }, 2000);
      }
    });

    modalButton_Yes.addEventListener("click", () => {
      if (opened_tasks > 0) {
        tasks += 1;
        opened_tasks -= 1;
        num_1.innerHTML = tasks;
        num_2.innerHTML = opened_tasks;
        modal.classList.add("hidden");
      }
    });
    modalButton_No.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  },
};
</script>
<style scoped>
.modal_wrapper {
  padding: 20px;
  width: 25vw;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    width: 30vw;
  }
}
@media only screen and (max-width: 768px) {
  .modal_wrapper {
    width: 40vw;
  }
}
@media only screen and (max-width: 400px) {
  .modal_wrapper {
    width: 50vw;
  }
}
</style>
