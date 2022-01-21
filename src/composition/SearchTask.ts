import { computed, ref } from "vue";
import { useStore } from "vuex";

export function SearchTask({ emit }) {
  const store = useStore();
  const tasks = computed(() => store.state.tasksModule.tasks);

  const title = ref("");
  const time = ref("");
  const time_2 = ref("");
  const isSearch = ref(false);
  const isExist = ref(false);
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
    const obj: object = {
      title: title.value as string,
      time: time.value as string,
      time_2: time_2.value as string,
    };
    isSearch.value = title.value || time.value || time_2.value ? true : false;
    sortProductsBySearchValue(obj);
    emit("setSearch", sortedProducts.value);
  }
  function sortProductsBySearchValue(value) {
    sortedProducts.value = [...tasks.value];
    if (value.title && !value.time && !value.time_2) {
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        return (
          item.customData.title
            .toLowerCase()
            .includes(value.title.toLowerCase()) ||
          item.customData.text.toLowerCase().includes(value.title.toLowerCase())
        );
      });
    } else if (value.title && value.time && !value.time_2) {
      const y = new Date(value.time);
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        const x = new Date(item.customData.time);
        return (
          item.customData.title
            .toLowerCase()
            .includes(value.title.toLowerCase()) && x >= y
        );
      });
    } else if (value.title && !value.time && value.time_2) {
      const y = new Date(value.time_2);
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        const x = new Date(item.customData.time);
        return (
          item.customData.title
            .toLowerCase()
            .includes(value.title.toLowerCase()) &&
          ((y.getFullYear() >= x.getFullYear() &&
            y.getDate() >= x.getDate() &&
            y.getMonth() >= x.getMonth()) ||
            (y.getFullYear() >= x.getFullYear() &&
              (y.getDate() > x.getDate() ||
                y.getDate() < x.getDate() ||
                y.getDate() == x.getDate()) &&
              y.getMonth() > x.getMonth()))
        );
      });
    } else if (value.time && !value.time_2 && !value.title) {
      const y = new Date(value.time);
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        const x = new Date(item.customData.time);
        return x >= y;
      });
    } else if (value.time_2 && !value.time && !value.title) {
      const y = new Date(value.time_2);
      sortedProducts.value = sortedProducts.value.filter(function (item) {
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
      });
    } else if (value.time && value.time_2 && !value.title) {
      const dateStart = Date.parse(value.time);
      const dateEnd = Date.parse(value.time_2);
      const dates = [];
      for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
        const str = new Date(i).toISOString().substr(0, 10);
        dates.push(str);
      }
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        const x = new Date(item.customData.time).toISOString().substr(0, 10);
        return dates.includes(x);
      });
    } else if (value.title && value.time && value.time_2) {
      const dateStart = Date.parse(value.time);
      const dateEnd = Date.parse(value.time_2);
      const dates = [];
      for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
        const str = new Date(i).toISOString().substr(0, 10);
        dates.push(str);
      }
      sortedProducts.value = sortedProducts.value.filter(function (item) {
        const x = new Date(item.customData.time).toISOString().substr(0, 10);
        return (
          dates.includes(x) &&
          item.customData.title
            .toLowerCase()
            .includes(value.title.toLowerCase())
        );
      });
    } else {
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
    sortProductsBySearchValue,
  };
}
