<template lang="pug">
.taskCard(:class="{ outdated: isOutdated, soon: isSoon, future: isFuture }")
  h4 {{ task.title }}
  p.time {{ task.time }}
  fa.clock(icon="clock", v-if="inProgress")
  fa.check-circle(icon="check-circle", v-if="done")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Status from "@/enums/StatusEnum";

export default defineComponent({
  setup() {},
  name: "TaskCard",
  props: ["task"],
  data() {
    return {
      Status,
    };
  },
  computed: {
    toDo() {
      return this.task.status == Status.toDo;
    },
    inProgress() {
      return this.task.status == Status.inProgress;
    },
    done() {
      return this.task.status == Status.done;
    },
    isOutdated() {
      const x = new Date(this.task.time);
      const y = new Date();
      return (y.getFullYear() == x.getFullYear() &&
        y.getDate() > x.getDate() &&
        y.getMonth() >= x.getMonth()) ||
        y.getFullYear() > x.getFullYear()
        ? true
        : false;
    },
    isSoon() {
      const x = new Date(this.task.time);
      const y = new Date();
      return x.getFullYear() === y.getFullYear() &&
        x.getDate() === y.getDate() &&
        x.getMonth() === y.getMonth()
        ? true
        : false;
    },
    isFuture() {
      const x = new Date(this.task.time);
      const y = new Date();
      return x > y ? true : false;
    },
  },
});
</script>
<style scoped lang="sass">
.future
  background-color: LightGreen !important
.soon
  background-color: Gold !important
.outdated
  background-color: OrangeRed !important
.taskCard
  padding: 10px 40px
  border-radius: 10px
  text-align: center
  position: relative
  z-index: 1
  border-style: solid
  border-width: 0 4px 4px 0
  border-color: white

.clock
  position: absolute
  right: 10px
  top: 10px

.check-circle
  position: absolute
  right: 10px
  top: 10px
</style>
