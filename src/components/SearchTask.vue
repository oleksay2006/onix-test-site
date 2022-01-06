<template lang="pug">
.searchDiv
  h3 Поиск
  input.search-input.new-title(
    v-on:input="searchTask",
    placeholder="Введите название задачи",
    v-model="title"
  )
  .datesInputs
    .firstInput
      p.info от:
      input.dateInput(
        v-model="time",
        v-on:input="searchTask",
        type="date",
        name="trip-start",
        min="2017-12-21",
        max="2030-12-31"
      )
    .secondInput
      p.info до:
      input.dateInput(
        v-model="time_2",
        v-on:input="searchTask",
        type="date",
        name="trip-start",
        min="2017-12-21",
        max="2030-12-31"
      )
  fa.search(icon="search", v-on:click="searchTask()")
  fa.cancelSearch(icon="times", v-on:click="cancelSearch()", v-if="isSearch")
  span.helper(v-if="isExist") Задачи с такими параметрами не существует
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { taskInterface } from "@/interfaces/task.interface";

export default defineComponent({
  setup() {},
  name: "SearchTask",
  data() {
    return {
      title: "" as string,
      time: "" as string,
      time_2: "" as string,
      isSearch: false as boolean,
      isExist: false as boolean,
      sortedProducts: [] as taskInterface[],
    };
  },
  methods: {
    cancelSearch() {
      this.title = "";
      this.time = "";
      this.time_2 = "";
      this.isSearch = false;
      this.isExist = false;
      this.$emit("setSearch", {
        title: "",
        time: "",
        time_2: "",
      });
    },
    searchTask() {
      let obj: object = {
        title: this.title as string,
        time: this.time as string,
        time_2: this.time_2 as string,
      };
      this.isSearch = this.title || this.time || this.time_2 ? true : false;
      this.sortProductsBySearchValue(obj);
      this.$emit("setSearch", this.sortedProducts);
    },
    sortProductsBySearchValue(value: {
      title: string;
      time: string;
      time_2: string;
    }) {
      this.sortedProducts = [...this.tasks];
      if (value.title && !value.time && !value.time_2) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return (
            item.title.toLowerCase().includes(value.title.toLowerCase()) ||
            item.text.toLowerCase().includes(value.title.toLowerCase())
          );
        });
      } else if (value.title && value.time && !value.time_2) {
        const y = new Date(value.time);
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time);
          return (
            item.title.toLowerCase().includes(value.title.toLowerCase()) &&
            x >= y
          );
        });
      } else if (value.title && !value.time && value.time_2) {
        const y = new Date(value.time_2);
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time);
          return (
            item.title.toLowerCase().includes(value.title.toLowerCase()) &&
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
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time);
          return x >= y;
        });
      } else if (value.time_2 && !value.time && !value.title) {
        const y = new Date(value.time_2);
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time);
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
        let dateStart = Date.parse(value.time);
        let dateEnd = Date.parse(value.time_2);
        let dates = [];
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
          let str = new Date(i).toISOString().substr(0, 10);
          dates.push(str);
        }
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time).toISOString().substr(0, 10);
          return dates.includes(x);
        });
      } else if (value.title && value.time && value.time_2) {
        let dateStart = Date.parse(value.time);
        let dateEnd = Date.parse(value.time_2);
        let dates = [];
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
          let str = new Date(i).toISOString().substr(0, 10);
          dates.push(str);
        }
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time).toISOString().substr(0, 10);
          return (
            dates.includes(x) &&
            item.title.toLowerCase().includes(value.title.toLowerCase())
          );
        });
      } else {
        this.sortedProducts = this.tasks;
        // this.sortedProducts = [];
      }
      if (this.sortedProducts.length == 0) {
        this.isExist = true;
      } else {
        this.isExist = false;
      }
    },
  },
  computed: {
    ...mapState(["tasks"]),
  },
});
</script>
<style scoped lang="sass">
.datesInputs
  display: flex

.firstInput
  display: flex
  align-items: center
  margin-left: 20px

.secondInput
  display: flex
  align-items: center
  margin-left: 20px

.helper
  margin-left: 15px
  font-size: 15px
  color: red

.first-part-task
  /* display: block; */
  display: flex
  flex-direction: column

.searchDiv h3
  margin-right: 15px

.cancelSearch
  margin-left: 15px
  font-size: 23px
  color: gray
  cursor: pointer

.search
  margin-left: 10px
  font-size: 20px
  color: gray
  cursor: pointer

.search-input
  padding: 7px 20px 7px 10px
  border-radius: 5px
  border: 1px solid #cfd8dc
  font-size: 14px
  width: 200px

.searchDiv
  margin-bottom: 20px
  display: flex
  align-items: center

.dateInput
  border-radius: 5px
  padding: 5.4px 13px
  border: 1px solid #cfd8dc
  margin-left: 10px

@media only screen and (max-width: 1024px)
  .search-input
    width: 170px

  .searchDiv
    flex-wrap: wrap

  .helper
    margin-left: 0
    margin-top: 15px

@media only screen and (max-width: 768px)
  .datesInputs
    flex-direction: column

  .firstInput
    margin-bottom: 5px

  .secondInput
    margin-top: 5px

@media only screen and (max-width: 640px)
  .firstInput
    margin-left: 10px

  .secondInput
    margin-left: 10px

  .searchDiv h3
    margin-right: 5px

  .cancelSearch
    margin-left: 5px

@media only screen and (max-width: 480px)
  .firstInput
    margin-left: 0px

  .secondInput
    margin-left: 0px

  .datesInputs
    margin-top: 10px

  .searchDiv h3
    margin-right: 20px

  .cancelSearch
    margin-left: 15px
</style>
