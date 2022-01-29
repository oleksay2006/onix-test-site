<template lang="pug">
.calendar-tab.tab.tab-4
  TaskDetailsModal(
    v-show="isShowChange",
    v-on:removeEditTask="removeEditTask",
    v-bind:currentTask="currentTask",
    v-bind:isCalendar="isCalendar"
  )
  .text-center.section
    h2.h2 Даты создания задач
    v-calendar.custom-calendar.max-w-full(
      :masks="masks",
      :attributes="tasks",
      disable-page-swipe,
      is-expanded
    )
      template(v-slot:day-content="{ day, attributes }")
        .flex.flex-col.h-full.z-10
          span.day-label.text-sm.text-gray-900 {{ day.day }}
          .flex-grow.overflow-y-auto.overflow-x-auto
            p.testClass(
              v-for="attr in attributes",
              :key="attr.customData.id",
              v-on:click="showChange(attr)"
            ) {{ attr.customData.title }}
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import { modalsInfo } from "@/composables/modalsInfo";

export default defineComponent({
  name: "Calendar",
  components: {
    TaskDetailsModal,
  },
  setup() {
    const masks: object = {
      weekdays: "WWW",
    };
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    return {
      masks,
      tasks,
      ...modalsInfo(),
    };
  },
});
</script>
<style lang="postcss" scoped>
.h2 {
  margin-bottom: 10px;
}
.h-full {
  height: 100%;
}
.flex-col {
  flex-direction: column;
}
.flex {
  display: flex;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-auto {
  overflow-x: auto;
}
.section {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.testClass {
  padding: 4px;
  border-radius: 0.125rem;
  margin-bottom: 4px;
  background: #4299e1;
  color: white;
  font-size: 14px;
}
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
/deep/ .vc-weeks {
  padding: 0;
}
/deep/ .vc-weekday {
  background-color: #f8fafc;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 5px 0;
}
/deep/ .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: 90px;
  min-width: 90px;
  background-color: white;
  z-index: 0;
}
/deep/ .weekday-1 {
  background-color: #eff8ff;
}
/deep/ .weekday-7 {
  background-color: #eff8ff;
}
/deep/ .vc-day:not(.on-bottom) {
  border-bottom: 1px solid #b8c2cc;
}
/deep/ .vc-day:not(.on-right) {
  border-right: 1px solid #b8c2cc;
}
/deep/ .vc-day:not(.on-bottom) .weekday-1 {
  border-bottom: 1px solid #b8c2cc;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 80%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
