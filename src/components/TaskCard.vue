<template lang="pug">
.taskCard(:class="{ outdated: isOutdated, soon: isSoon, future: isFuture }")
  h4 {{ task.customData.title }}
  p.time {{ task.customData.time }}
  fa.clock(icon="clock", v-if="inProgress")
  fa.check-circle(icon="check-circle", v-if="done")
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";
import Status from "@/enums/StatusEnum";
import { StyleByDate } from "@/composition/StyleByDate";

export default defineComponent({
  setup(props) {
    const { task } = toRefs(props);
    const inProgress = computed(() => {
      return task.value.customData.status == Status.inProgress;
    });
    const done = computed(() => {
      return task.value.customData.status == Status.done;
    });
    return {
      Status,
      inProgress,
      done,
      ...StyleByDate(task),
    };
  },
  name: "TaskCard",
  props: ["task"],
  data() {
    return {};
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
