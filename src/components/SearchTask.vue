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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { searchTask } from "@/composables/searchTask";

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    return {
      tasks,
      ...searchTask({ emit }),
    };
  },
  name: "SearchTask",
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
