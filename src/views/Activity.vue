<template lang="pug">
.activity.tab.tab-3.is-active
  p.day TODAY
  .message
    .first-part
      .message-img
        fa.message-img-fa(icon="check")
      p {{ messages[0].text }}
    p.time 8:40 PM
  .message
    .first-part
      .message-img.chat-icon
        fa.message-img-fa(icon="comment-alt")
      p {{ messages[1].text }}
    p.time 7:32 PM
  .apendix
    p During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
  .message
    .first-part
      .message-img.download-icon
        fa.download-icon-fa(icon="cloud-download-alt")
      p {{ messages[2].text }}
    p.time 6:02 PM
  .images
    img(
      v-for="(img, index) in images",
      :key="'image-' + index",
      :src="getImgUrl(img.source)",
      @click="showIndex(index)"
    )
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Activity",
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    const images = computed(() => store.state.activityPageModule.images);
    const messages = computed(() => store.state.activityPageModule.messages);
    function showIndex(index: number) {
      const notifications: Element = document.querySelector(".notifications");
      // this.IMAGE_INDEX(index);
      store.dispatch("activityPageModule/IMAGE_INDEX", index);
      notifications.classList.remove("hidden");
    }
    function getImgUrl(pic: string) {
      return require("../assets/" + pic);
    }
    return {
      images,
      messages,
      showIndex,
      getImgUrl,
    };
  },
});
</script>
