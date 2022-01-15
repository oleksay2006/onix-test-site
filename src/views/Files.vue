<template lang="pug">
.files-tab.tab.tab-5
  h3 Изображения на вкладке Activity:
  ul
    li(v-for="(img, index) in images", :key="'image-' + index") {{ img.source }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Files",
  computed: {
    ...mapState({
      images: (state: any): any => {
        return state.activityPageModule.images;
      },
    }),
  },
});
</script>
<style scoped lang="sass">
ul
  padding-left: 20px
  li
    margin-top: 5px
    font-size: 17px
</style>
