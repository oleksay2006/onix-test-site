<template lang="pug">
section.main
  .main-wrapper
    Header/
    nav.nav
      router-link.nav-elem.is-active(data-tab-name="tab-1", to="/") Tasks
      router-link.nav-elem(data-tab-name="tab-2", to="/kanban") Kanban
      router-link.nav-elem(data-tab-name="tab-3", to="/activity") Activity
      router-link.nav-elem(data-tab-name="tab-4", to="/calendar") Calendar
      router-link.nav-elem(data-tab-name="tab-5", to="/files") Files
  .main-page
    router-view/
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
      tabNav.forEach((item) => {
        item.addEventListener("click", selectTabNav);
      });
      function selectTabNav() {
        tabNav.forEach((item) => {
          item.classList.remove("is-active");
        });
        this.classList.add("is-active");
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
