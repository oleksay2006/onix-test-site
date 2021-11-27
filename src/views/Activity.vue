<template lang="pug">
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
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
  mounted() {
    const notifications: Element = document.querySelector(".notifications");
    let notifications_text: Element = document.querySelector(
      ".notifications_text"
    );
    const town: Element = document.querySelector("#town");
    const beach: Element = document.querySelector("#beach");
    const fiord: Element = document.querySelector("#fiord");
    const beach_2: Element = document.querySelector("#beach_2");
    const images: Array<Element> = [town, beach, fiord, beach_2];
    images.forEach((item) => {
      item.addEventListener("click", () => {
        notifications.classList.remove("hidden");
        notifications_text.innerHTML = String(images.indexOf(item));
      });
    });
  },
});
</script>
