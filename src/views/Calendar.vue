<template>
  <div class="calendar-tab tab tab-4">
    <TaskDetailsModal
      v-show="isShowChange"
      v-on:removeEditTask="removeEditTask"
      v-bind:currentTask="currentTask"
      v-bind:isCalendar="isCalendar"
    />
    <div class="text-center section">
      <h2 class="h2">Calendar</h2>
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
  <!-- //- v-calendar -->
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
      console.log(this.tasks);
      this.currentTask = task;
      this.isCalendar = false;
      this.isShowChange = true;
    },
    testClass() {
      console.log(this.tasks);
    },
  },
  data() {
    // const x = new Date(this.task.time);
    // const y = new Date();
    // y.getFullYear() == x.getFullYear()
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
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
      isShowChange: false,
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Take car to the shop",
            class: "bg-indigo-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 5,
          customData: {
            title: "Meeting with new client.",
            class: "bg-teal-500 text-white",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 6,
          customData: {
            title: "Mia's gymnastics practice.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 7,
          customData: {
            title: "Cookout with friends.",
            class: "bg-orange-500 text-white",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 8,
          customData: {
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 9,
          customData: {
            title: "Visit great grandma.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 25),
        },
      ],
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
