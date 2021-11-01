<template lang="pug">
section.main
  .main-wrapper
    Header/
    nav.nav
      .nav-elem(data-tab-name="tab-1", @click="setTask") Tasks
      .nav-elem(data-tab-name="tab-2") Kanban
      .nav-elem.is-active(data-tab-name="tab-3") Activity
      .nav-elem(data-tab-name="tab-4") Calendar
      .nav-elem(data-tab-name="tab-5") Files
  .main-page
    .tasks-tab.tab.tab-1
      p.day TASK LIST
      .message.task(
        v-for="task in TASKS",
        v-bind:key="task.title",
        v-bind:task_data="task"
      )
        .first-part-task
          h3 {{ task.title }}
          p {{ task.text }}
        p.time Выполнить до {{ task.time }}
    .kanban-tab.tab.tab-2
      p Kanban
    .activity.tab.tab-3.is-active
      p.day TODAY
      .message
        .first-part
          .message-img
            fa.message-img-fa(icon="check")
          p Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users
        p.time 8:40 PM
      .message
        .first-part
          .message-img.chat-icon
            fa.message-img-fa(icon="comment-alt")
          p Emilee Simchenko commented on Account for teams and personal in bottom style
        p.time 7:32 PM
      .apendix
        p During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
      .message
        .first-part
          .message-img.download-icon
            fa.download-icon-fa(icon="cloud-download-alt")
          p Darika Samak uploaded 4 files on An option to search in current projects or in all projects
        p.time 6:02 PM
      .images
        img#town(src="@/assets/town.jpg")
        img#beach(src="@/assets/beach.jpg")
        img#fiord(src="@/assets/fiord.jpg")
        img#beach_2(src="@/assets/beach-2.jpg")
    .calendar-tab.tab.tab-4
      p Calendar
    .files-tab.tab.tab-5
      p Files
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
// import { taskInterface } from "@/interfaces/task.interface";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Tabs",
  components: {
    Header,
  },
  data() {
    return {
      tasks: {
        first: {},
        second: {},
        third: {},
      },
    };
  },
  mounted() {
    this.SET_TASKS();
    let tab = function () {
      let tabNav = document.querySelectorAll(".nav-elem");
      let tabContent = document.querySelectorAll(".tab");
      let tabName;
      tabNav.forEach((item) => {
        item.addEventListener("click", selectTabNav);
      });

      function selectTabNav() {
        tabNav.forEach((item) => {
          item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name");
        selectTabContent(tabName);
      }
      function selectTabContent(tabName) {
        tabContent.forEach((item) => {
          item.classList.contains(tabName)
            ? item.classList.add("is-active")
            : item.classList.remove("is-active");
        });
      }
    };

    tab();
  },
  methods: {
    ...mapActions(["SET_TASKS"]),
  },
  computed: {
    ...mapGetters(["TASKS"]),
  },
});
</script>
<style></style>
