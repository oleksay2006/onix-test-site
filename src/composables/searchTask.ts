import { computed, ref } from "vue";
import { useStore } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";

export function searchTask({ emit }) {
  const store = useStore();
  const tasks = computed(() => store.state.tasksModule.tasks);

  const title = ref<string>("");
  const time = ref<string>("");
  const time_2 = ref<string>("");
  const isSearch = ref<boolean>(false);
  const isExist = ref<boolean>(false);
  const sortedProducts = ref([]);
  function cancelSearch() {
    title.value = "";
    time.value = "";
    time_2.value = "";
    isSearch.value = false;
    isExist.value = false;
    emit("setSearch", {
      title: "",
      time: "",
      time_2: "",
    });
  }
  function searchTask() {
    const obj = {
      title: title.value as string,
      time: time.value as string,
      time_2: time_2.value as string,
    };
    isSearch.value = title.value || time.value || time_2.value ? true : false;
    sortProductsBySearchValue_2(obj);
    emit("setSearch", sortedProducts.value);
  }
  function sortProductsBySearchValue_2(value: {
    title: string;
    time: string;
    time_2: string;
  }) {
    sortedProducts.value = [...tasks.value];
    sortedProducts.value = sortedProducts.value.filter(function (item) {
      if (value.title && !value.time && !value.time_2) {
        return (
          item.customData.title
            .toLowerCase()
            .includes(value.title.toLowerCase()) ||
          item.customData.text.toLowerCase().includes(value.title.toLowerCase())
        );
      }
      if (value.time && !value.time_2 && !value.title) {
        const y = new Date(value.time);
        const x = new Date(item.customData.time);
        return x >= y;
      }
      if (value.time_2 && !value.time && !value.title) {
        const y = new Date(value.time_2);
        const x = new Date(item.customData.time);
        return (
          (y.getFullYear() >= x.getFullYear() &&
            y.getDate() >= x.getDate() &&
            y.getMonth() >= x.getMonth()) ||
          (y.getFullYear() >= x.getFullYear() &&
            (y.getDate() > x.getDate() ||
              y.getDate() < x.getDate() ||
              y.getDate() == x.getDate()) &&
            y.getMonth() > x.getMonth())
        );
      }
    });
    if (!value.title && !value.time && !value.time_2) {
      sortedProducts.value = tasks.value;
      // this.sortedProducts = [];
    }
    if (sortedProducts.value.length == 0) {
      isExist.value = true;
    } else {
      isExist.value = false;
    }
  }
  return {
    // tasks,
    title,
    time,
    time_2,
    isSearch,
    isExist,
    sortedProducts,
    cancelSearch,
    searchTask,
    sortProductsBySearchValue_2,
  };
}
