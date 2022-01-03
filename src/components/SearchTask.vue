<template lang="pug">
.searchDiv
  h3 Поиск
  input.search-input.new-title(
    v-on:input="searchTask",
    placeholder="Введите название задачи",
    v-model="title"
  )
  p.info от:
  input.dateInput(
    v-model="time",
    v-on:input="searchTask",
    type="date",
    name="trip-start",
    min="2017-12-21",
    max="2030-12-31"
  )
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
      sortedProducts: [],
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
      let obj = {
        title: this.title,
        time: this.time,
        time_2: this.time_2,
      };
      this.isSearch = this.title || this.time || this.time_2 ? true : false;
      this.sortProductsBySearchValue(obj);
      console.log("sortedProducts: ", this.sortedProducts);
      this.$emit("setSearch", this.sortedProducts);

      // this.$emit("setSearch", {
      //   title: this.title,
      //   time: this.time,
      //   time_2: this.time_2,
      // });

      // let dateStart = Date.parse(this.time);
      // let dateEnd = Date.parse(this.time_2);
      // if (this.time && this.time_2) {
      //   console.log("both dates");
      //   for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
      //     console.log(new Date(i).toISOString().substr(0, 10));
      //   }
      // }
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.tasks];
      if (value.title && !value.time && !value.time_2) {
        console.log("only title without dates");
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
        console.log("only title and first date");
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
        console.log("only title and second date");
      } else if (value.time && !value.time_2 && !value.title) {
        const y = new Date(value.time);
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time);
          return x >= y;
        });
        console.log("only first date");
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
        console.log("only second date");
      } else if (value.time && value.time_2 && !value.title) {
        let dateStart = Date.parse(value.time);
        let dateEnd = Date.parse(value.time_2);
        let dates = [];
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
          let str = new Date(i).toISOString().substr(0, 10);
          dates.push(str);
          console.log(str);
        }
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time).toISOString().substr(0, 10);
          return dates.includes(x);
        });
        console.log("both dates without title ");
      } else if (value.title && value.time && value.time_2) {
        let dateStart = Date.parse(value.time);
        let dateEnd = Date.parse(value.time_2);
        let dates = [];
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
          let str = new Date(i).toISOString().substr(0, 10);
          dates.push(str);
          console.log(str);
        }
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          const x = new Date(item.time).toISOString().substr(0, 10);
          return (
            dates.includes(x) &&
            item.title.toLowerCase().includes(value.title.toLowerCase())
          );
        });
        console.log("title, both dates");
      } else {
        this.sortedProducts = this.tasks;
        // this.sortedProducts = [];
      }
      if (this.sortedProducts.length == 0) {
        this.isExist = true;
      } else {
        this.isExist = false;
      }
      console.log(this.sortedProducts);
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
