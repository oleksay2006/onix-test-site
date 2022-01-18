<template>
  <div class="calendar-tab tab tab-4">
    <TaskDetailsModal
      v-show="isShowChange"
      v-on:removeEditTask="removeEditTask"
      v-bind:currentTask="currentTask"
      v-bind:isCalendar="isCalendar"
    />
    <div class="text-center section">
      <h2 class="h2">Даты создания задач</h2>
      <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="tasks"
        disable-page-swipe
        is-expanded
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="flex flex-col h-full z-10">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <p
                v-for="attr in attributes"
                :key="attr.customData.id"
                class="testClass"
                v-on:click="showChange(attr)"
              >
                {{ attr.customData.title }}
              </p>
            </div>
          </div>
        </template>
      </v-calendar>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import TaskDetailsModal from "@/components/TaskDetailsModal.vue";
import { taskInterface } from "@/interfaces/task.interface";

export default defineComponent({
  name: "Calendar",
  components: {
    TaskDetailsModal,
  },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    // function removeEditTask() {
    //   this.isShowChange = false;
    //   this.isCalendar = true;
    // }
    // function showChange(task: taskInterface) {
    //   this.currentTask = task;
    //   this.isCalendar = false;
    //   this.isShowChange = true;
    // }
    return {
      tasks,
      // removeEditTask,
      // showChange,
    };
  },
  computed: {},
  methods: {
    removeEditTask() {
      this.isShowChange = false;
      this.isCalendar = true;
    },
    showChange(task: taskInterface) {
      this.currentTask = task;
      this.isCalendar = false;
      this.isShowChange = true;
    },
  },
  data() {
    return {
      isCalendar: true as boolean,
      currentTask: {
        customData: {
          id: 0,
          title: "",
          text: "",
          time: "",
          isNew: false,
          status: "",
        },
        dates: "",
      } as taskInterface,
      isShowChange: false as boolean,
      masks: {
        weekdays: "WWW",
      },
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
