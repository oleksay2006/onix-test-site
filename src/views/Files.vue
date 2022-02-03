<template lang="pug">
.files-tab.tab.tab-5
  h3 Изображения на вкладке Activity:
  ul
    li(v-for="(img, index) in images", :key="'image-' + index") {{ img.source }}
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Status from "@/enums/StatusEnum";

export default defineComponent({
  name: "Files",
  setup() {
    const store = useStore();
    const images = computed(() => store.state.activityPageModule.images);
    return {
      images,
      Status,
    };
  },
});
</script>
<style scoped lang="sass">
.error
  border: 1px solid red

ul
  padding-left: 20px
  li
    margin-top: 5px
    font-size: 17px
</style>
