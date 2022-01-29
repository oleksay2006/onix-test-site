import { computed, ref } from "vue";
import { useStore } from "vuex";

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
    sortedProducts.value = tasks.value.filter(function (item) {
      let dateRange: boolean = true;
      const fromDate: Date | undefined = time.value
        ? new Date(time.value)
        : undefined;
      const toDate: Date | undefined = time_2.value
        ? new Date(time_2.value)
        : undefined;
      const taskDate: Date = new Date(item.customData.time);
      if (fromDate && toDate) {
        dateRange = fromDate <= taskDate && taskDate <= toDate;
      } else if (toDate) {
        dateRange = taskDate <= toDate;
      } else if (fromDate) {
        dateRange = fromDate <= taskDate;
      }
      return (
        item.customData.title
          .toLowerCase()
          .includes(value.title.toLowerCase()) && dateRange
      );
    });
    isExist.value = !sortedProducts.value.length;
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
