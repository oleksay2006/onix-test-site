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
    Tasks/
    Kanban/
    Activity/
    Calendar/
    Files/
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import Kanban from "@/components/Kanban.vue";
import Activity from "@/components/Activity.vue";
import Calendar from "@/components/Calendar.vue";
import Files from "@/components/Files.vue";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Tabs",
  components: {
    Header,
    Tasks,
    Kanban,
    Activity,
    Calendar,
    Files,
  },
  data() {
    return {};
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
