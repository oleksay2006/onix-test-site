<template lang="pug">
.searchDiv
  h3 Поиск
  input.search-input.new-title(
    v-on:input="inputForSearch",
    placeholder="Введите название задачи",
    v-model="title"
  )
  p.info от:
  input.dateInput(
    v-model="time",
    v-on:input="inputForSearch",
    type="date",
    name="trip-start",
    min="2017-12-21",
    max="2030-12-31"
  )
  p.info до:
  input.dateInput(
    v-model="time_2",
    v-on:input="inputForSearch",
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

export default defineComponent({
  setup() {},
  name: "SearchTask",
  data() {
    return {
      title: "",
      time: "",
      time_2: "",
      isSearch: false,
      isExist: false,
      sortedProductsForHelper: [],
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
    inputForSearch() {
      this.isSearch = true;
      console.log("input value changed", " isSearch = ", this.isSearch);
      this.$emit("setSearch", {
        title: this.title,
        time: this.time,
        time_2: this.time_2,
      });
      this.sortedProductsForHelper = [...this.tasks];
      let value = {
        title: this.title,
        time: this.time,
        time_2: this.time_2,
      };
      if (value.title) {
        this.sortedProductsForHelper = this.sortedProductsForHelper.filter(
          function (item) {
            return item.title.toLowerCase().includes(value.title.toLowerCase());
          }
        );
        if (this.sortedProductsForHelper.length == 0) {
          this.isExist = true;
        } else {
          this.isExist = false;
        }
      } else {
        this.isExist = false;
        this.isSearch = false;
      }
    },
    searchTask() {
      this.$emit("setSearch", {
        title: this.title,
        time: this.time,
        time_2: this.time_2,
      });
      // let dateStart = Date.parse(this.time);
      // let dateEnd = Date.parse(this.time_2);
      // if (this.time && this.time_2) {
      //   console.log("both dates");
      //   for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
      //     console.log(new Date(i).toISOString().substr(0, 10));
      //   }
      // }

      // else if (this.time && !this.time_2) {
      //   console.log("only 1 date");
      // } else if (this.time_2 && !this.time) {
      //   console.log("only 2 date");
      // }

      // for (let i = 0; i < this.tasks.length; i++) {
      //   console.log(this.tasks[i].title);
      //   // let re = new RegExp(this.title.toLowerCase());
      //   // alert(re.test(this.tasks[i].title.toLowerCase())); // true
      // }
    },
  },
  computed: {
    ...mapState(["tasks"]),
  },
});
</script>
<style scoped>
.helper {
  margin-left: 15px;
  font-size: 15px;
  color: red;
}
.first-part-task {
  /* display: block; */
  display: flex;
  flex-direction: column;
}
.searchDiv h3 {
  margin-right: 15px;
}
.cancelSearch {
  margin-left: 15px;
  font-size: 23px;
  color: gray;
  cursor: pointer;
}
.search {
  margin-left: 10px;
  font-size: 20px;
  color: gray;
  cursor: pointer;
}
.info {
  margin-left: 20px;
}
.search-input {
  /* margin-top: 10px; */
  padding: 7px 20px 7px 10px;
  border-radius: 5px;
  border: 1px solid #cfd8dc;
  font-size: 14px;
  width: 200px;
}
.searchDiv {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.dateInput {
  border-radius: 5px;
  padding: 5.4px 13px;
  border: 1px solid #cfd8dc;
  margin-left: 10px;
}
</style>
