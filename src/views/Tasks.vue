<template lang="pug">
.tasks-tab.tab.tab-1
  SearchTask(v-on:setSearch="setSearchValue")
  .list
    p.day TASK LIST
    .add-new(v-on:click="showNew()")
      p Add new task +
  AddTaskModal(v-show="isShow", v-on:removeNew="removeNew()")
  TaskDetailsModal(
    v-show="isShowChange",
    v-on:removeEditTask="removeEditTask",
    v-bind:currentTask="currentTask"
  )
  .message.task(
    v-for="(task, index) in filteredProducts",
    :key="'task-' + index",
    :class="{ new_animation: task.isNew }",
    :load="removeAnimation(task)",
    v-on:click="showChange(task)"
  )
    .first-part-task
      h3.title(:ref="(el) => { if (el) divs[index] = el; }") {{ task.title }}
      p.text {{ task.text }}
    p.time Выполнить до {{ task.time }}
    fa.trash-alt(icon="trash-alt", v-on:click="deleteTask(task.id)")
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { mapActions, mapState } from "vuex";
import useVuelidate from "@vuelidate/core";
import Status from "@/enums/StatusEnum";
import AddTaskModal from "@/components/AddTaskModal.vue";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import SearchTask from "@/components/SearchTask.vue";

export default defineComponent({
  name: "Tasks",
  components: {
    AddTaskModal,
    TaskDetailsModal,
    SearchTask,
  },
  setup() {
    // Before the component is mounted, the value
    // of the ref is `[]` which is the default
    let num = 0;
    const divs = ref([]);
    onMounted(() => {
      divs.value.forEach((element) => {
        setTimeout(() => {
          element.classList.add("animation");
          console.log(element);
        }, num);
        num += 500;
      });
    });
    return {
      divs,
      close,
    };
  },
  data() {
    return {
      v$: useVuelidate(),
      title: "",
      description: "",
      time: "",
      isShow: false,
      isShowChange: false,
      currentTask: {},
      Status,
      sortedProducts: [],
      searchValue: "",
    };
  },
  methods: {
    ...mapActions(["SET_TASKS", "CREATE_NEW_TASK", "DELETE_TASK"]),
    setSearchValue(data) {
      this.searchValue = data.title;
    },
    removeAnimation(task) {
      setTimeout(() => {
        task.isNew = false;
      }, 2000);
    },
    showNew() {
      this.isShow = true;
      console.log(this.isShow);
    },
    showChange(task) {
      this.currentTask = task;
      this.isShowChange = true;
    },
    removeEditTask() {
      this.isShowChange = false;
    },
    removeNew() {
      this.isShow = false;
    },
    deleteTask(id) {
      this.DELETE_TASK(id);
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.tasks];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.title.toLowerCase().includes(value.toLowerCase());
        });
        console.log(this.sortedProducts);
      } else {
        this.sortedProducts = this.tasks;
      }
    },
  },
  watch: {
    searchValue: function () {
      this.sortProductsBySearchValue(this.searchValue);
    },
  },
  computed: {
    ...mapState(["tasks"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.tasks;
      }
    },
  },
  mounted() {
    this.sortProductsBySearchValue(this.searchValue);
    console.log(this.searchValue);
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
