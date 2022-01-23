<template lang="pug">
.files-tab.tab.tab-5
  h3(v-on:click="Click") Изображения на вкладке Activity:
  ul
    li(v-for="(img, index) in images", :key="'image-' + index") {{ img.source }}
  p {{ data }}
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Files",
  setup() {
    const store = useStore();
    const images = computed(() => store.state.activityPageModule.images);
    // let obj = reactive({
    //   title: "files",
    //   id: Date.now(),
    // });
    // let obj_2 = {
    //   title: "changed",
    //   id: Date.now(),
    // };
    let data = reactive({
      errorName: "",
      errorDescription: "",
      name: "",
      description: "",
      isShowTaskDetails: false,
      isShowEdit: false,
      item: [],
      isShowWindow: false,
    });
    function Click() {
      data = {
        ...{
          errorName: "change",
          errorDescription: "change",
          name: "change",
          description: "change",
          isShowTaskDetails: false,
          isShowEdit: false,
          item: [],
          isShowWindow: false,
        },
      };
    }
    return {
      data,
      Click,
      images,
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
